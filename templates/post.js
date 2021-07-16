import React from 'react'
import Head from 'next/head';
import classes from './post.module.css';
import Image from 'next/image';

const Post = ({children, frontMatter}) => {
    const {title, description, image, date} = frontMatter;
    return (
        <article className={classes.post}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
            </Head>
            <main className={classes.content}>
                <header className={classes.header}>
                    <Image src={image} width={2000} height={2000} alt={description} />
                </header>
                <main className={classes.main}>
                    <div className={classes.main__head}>
                        <h1>{title}</h1>
                        <p>{date}</p>
                    </div>
                    <div className={classes.main__text}>
                        {children}
                    </div>
                </main>
            </main>
           
            
        </article>
    )
}

export default Post
