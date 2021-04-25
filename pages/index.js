
import { getFeaturedPosts } from '../lib/posts-util.js';
import { Fragment } from "react";

import HomeContent from '../components/home-page/home-content';


export default function Home(props) {
  return (
    <Fragment>
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
