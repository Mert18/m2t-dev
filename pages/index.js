import FeaturedPosts from '../components/home-page/featured-posts.js';
import classes from '../components/home-page/home-general.module.css';
import Hero from '../components/home-page/hero.js';
import { getFeaturedPosts } from '../lib/posts-util.js';
import LittleThings from '../components/home-page/little-things.js';



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
