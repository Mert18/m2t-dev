import React from "react";
import Link from "next/link";
import classes from "./styles/blogpost.module.css";

const BlogPost = ({ post }) => {
  return (
    <article className={classes.blogpostcard}>
      <Link
        as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
        href={`/blog/[slug]`}
      >
        <a>
          <h3 className={classes.posttitle}>{post.data.title}</h3>
        </a>
      </Link>

      <p className={classes.postdate}>{post.data.date}</p>
    </article>
  );
};

export default BlogPost;
