import FeaturedPosts from '../components/home-page/featured-posts.js';
import classes from '../components/home-page/home-general.module.css';
import Hero from '../components/home-page/hero.js';
import { getFeaturedPosts } from '../lib/posts-util.js';
import LittleThings from '../components/home-page/little-things.js';
import Graph from '../components/Graph.js';


import dynamic from 'next/dynamic'

const MyChart = dynamic(
    () => import('../components/Graph.js'),
    { ssr: false }
  )

export default function Home(props) {
  return (
    <div className={classes.home}>

      <div className={classes.hero}>
        <Hero />
      </div>

      <div className={classes.content}>
        <div className={classes.featuredposts}>
          <FeaturedPosts posts={props.posts} />
        </div>
        <div className={classes.littlethings}>
          <LittleThings />
        </div>
      </div>

      <div className={classes.graph}>
        <MyChart />
      </div>
      

    </div>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return{
    props: {
      posts: featuredPosts
    }
  }
}
