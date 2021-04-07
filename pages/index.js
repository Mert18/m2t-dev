
import { getFeaturedPosts } from '../lib/posts-util.js';
import { Fragment } from "react";

import Hero from '../components/home-page/hero';
import HomeContent from '../components/home-page/home-content';


export default function Home(props) {
  return (
    <Fragment>
      <Hero />
      <HomeContent posts={props.posts} />
    </Fragment>

  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    }
  }
}
