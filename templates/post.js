import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import classes from '../styles/Home.module.css';

const Post = ({children, frontMatter}) => {
    const {title, description, image, date} = frontMatter;
    console.log(children);
    console.log(frontMatter)
    return (
        <div className={classes.post}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
            </Head>
            <header className={classes.header}>
                <img src={image} alt="post header img" />
            </header>
            <main className={classes.main}>
                <div className={classes.main__head}>
                    <h1>{title}</h1>
                    <p>{date}</p>
                </div>
                <div>
                    {children}
                </div>
            </main>
            
        </div>
    )
}

export default Post
