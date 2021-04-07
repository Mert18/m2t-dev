
import { getFeaturedPosts } from '../lib/posts-util.js';
import { Fragment } from "react";

import Hero from '../components/home-page/hero';
import HomeContent from '../components/home-page/home-content';


export default function Home() {
  return (
    <Fragment>
      <Hero />
      <HomeContent />
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
