import React, {useState, useEffect} from 'react';
import classes from './projects.module.css';
import Head from 'next/head';
import Project from '../../components/projects/Project';

const arrProjects = [
    {
        title:"This Website!",
        desc:"My blog. I share Illustrations I made, blog posts and other odd things.",
        img:"/images/projects/merd.png",
        techs:["next-js","mongodb"],
        link:"https://merd.dev/"
    },
    {
        title:"Sticker Haven",
        desc:"An E-commerce website all about stickers.",
        img:"/images/illustrations/kindred.svg",
        techs:["react", "mongodb", "sass"],
        link:"https://merd.dev/",
    }
]

const Projects = () => {

    const [filter, setFilter] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(arrProjects)

    useEffect(() => {
        if(filter){
            setFilteredPosts(arrProjects.filter(el => el.techs.indexOf(filter) > -1))
        }else{
            setFilteredPosts(arrProjects);
        }
        
    }, [filter])
    const isActive = (path) => {
        if (filter == path) {
          return {
              animationName: "bounce",
              animationTimingFunction: "linear"
          };
        } else {
          return { color: "var(--text1)" };
        }
      };

    return (
        <section className={classes.projects}>
            <Head>
                <title>Web Projects</title>
                <meta name="description" content="Web Projects" />
            </Head>
            
            <main className={classes.content}>
                <ul className={classes.projects__projects}>
                    <div className={classes.filterItems}>
                        <button style={isActive()} onClick={(e) => setFilter(null) }>NO FILTER</button>

                        <div id={classes.reacttool} className={classes.tooltip}>
                            <button style={isActive("react")} onClick={(e) => setFilter("react") }><img  src="/images/icons/react.svg" /></button>
                        </div>
                        <div id={classes.mongodbtool} className={classes.tooltip}>
                            <button style={isActive("mongodb")} onClick={(e) => setFilter("mongodb") }><img src="/images/icons/mongodb.svg" /></button>
                        </div>
                        <div id={classes.nextjstool} className={classes.tooltip}>
                            <button style={isActive("next-js")} onClick={(e) => setFilter("next-js") }><img src="/images/icons/next-js.svg" /></button>

                        </div>
                        <div id={classes.postgrestool} className={classes.tooltip}>
                            <button style={isActive("postgresql")} onClick={(e) => setFilter("postgresql") }><img src="/images/icons/postgresql.svg" /></button>
                        </div>

                    </div>
                   {filteredPosts.map((el) => {
                       return <li key={el.title}>
                           <Project title={el.title} desc={el.desc} img={el.img} techs={el.techs} link={el.link} />
                       </li>
                   })}
                </ul>

            </main>

            
        </section>
    )
}

export default Projects
