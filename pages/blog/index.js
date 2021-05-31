import React from 'react'

import {promises as fs} from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import Link from 'next/link';
import classes from './blog.module.css';


const Blog = ({posts}) => {
    return (
        <div className={classes.blog}>
            <div className={classes.content}>
              <div className={classes.shadow}>

              </div>
              <div className={classes.posts}>
                {posts.map(post => {
                return(
                  <div className={classes.post}>
                    <div className={classes.text}>
                      <Link key={post.path} href={post.path}>
                        <h1>{post.title}</h1>
                      </Link>
                      <p>{post.description}</p>
                      <p>{post.date}</p>
                    </div>
                  </div>
                    )
                })}
              </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'pages/posts');
    const filenames = await fs.readdir(postsDirectory);
  
    const files = await Promise.all(filenames.map(async filename => {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFile(filePath, 'utf8');
      const matter = grayMatter(content);
      return {
        filename,
        matter
      }
    }))
  
    const posts = files.map(file => {
      return {
        path: `/posts/${file.filename.replace('.mdx', '')}`,
        title: file.matter.data.title,
        image: file.matter.data.image,
        description: file.matter.data.description,
        date: file.matter.data.date
      }
    })
  
    return{
      props: {
        posts
      }
    }
  }

export default Blog
