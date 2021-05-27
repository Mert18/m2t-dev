import React from 'react';
import classes from './projects.module.css';
import Head from 'next/head';
import Project from '../../components/projects/Project';

const Projects = () => {
    return (
        <div className={classes.projects}>
            <Head>
                <title>Web Projects</title>
                <meta name="description" content="Web Projects" />
            </Head>
            <div className={classes.projects__title}>
                <h2>Projects</h2>
            </div>

            <div className={classes.projects__projects}>
                
                <Project title="This Website!" desc="My blog. I share Illustrations I made, blog posts and other odd things." img="/images/assets/merd.png" techs={["next-js","mongodb"]} link="https://merd.dev/" />

                <Project title="Sticker Haven" desc="An E-commerce website all about stickers." img="/images/assets/notav.jpg" techs={["react", "mongodb", "sass"]} link="https://merd.dev/" />

                <Project title="Virtual Library" desc="Social media platform for book lovers but It is more about library other than social media." img="/images/assets/notav.jpg" techs={["react", "mongodb", "sass"]} link="https://virtual-library-git-master-mert18.vercel.app/" />

                <Project title="Reign of Cards" desc="Card games about math and any other thing." img="/images/assets/notav.jpg" techs={["react", "sass"]} link="https://reign-of-cards.vercel.app/" />

                <Project title="From The Heap" desc="Sharing platform. Share the songs and movies you love, see others' and discover new things!" img="/images/assets/notav.jpg" techs={["react", "mongodb", "sass"]} link="https://from-the-heap.vercel.app/" />

                <Project title="Tesadüf" desc="Decide the next book you will read, next movie you will watch. In Turkish language." img="/images/assets/notav.jpg" techs={["react", "mongodb", "sass"]} link="https://tesaduf.vercel.app/" />


            </div>
        </div>
    )
}

export default Projects
