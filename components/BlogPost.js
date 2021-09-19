import React from "react";
import Link from "next/link";
import classes from "./styles/blogpost.module.css";

const BlogPost = ({ post }) => {
  return (
    <Link
      as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
      href={`/blog/[slug]`}
    >
      <a>
        <div className={classes.blogpostcard}>
          <h3 className={classes.posttitle}>{post.data.title}</h3>
          <p className={classes.postdate}>{post.data.date}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
