import classes from '../styles/Home.module.css';
import Head from 'next/head';

import {promises as fs} from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import Link from 'next/link';

export default function Home({posts}) {
  return (
    <div className={classes.home}>
      <Head>
        <title>Mert Uygur Web Developer Blog</title>
        <meta
          name='description'
          content='An experimental area of a web developer.' />
      </Head>

      <div className={classes.content}>

        <div className={classes.filteredposts}>
          {posts.map(post => {
            return(
                <Link key={post.path} href={post.path}>
                  <a>
                    <div className={classes.filteredpost}>
                      <div className={classes.img}>
                        <img src={post.image} alt="post head img" width="150px" />
                      </div>
                      <div className={classes.text}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.date}</p>
                      </div>
                    </div>
                  </a>
                </Link>
            )
          })}
        </div>
        <div className={classes.artwork}>
          <h2>Illness</h2>
          <p>March 20, 2000</p>
          <img src="/images/illustrations/tree-circle.svg" alt="artwork of the day" />
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


