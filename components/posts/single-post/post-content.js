
import React from 'react';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import classes from './single-post.module.css';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = (props) => {

    const { post } = props;
    const formattedDate = new Date(post.date).toLocaleDateString('tr-TR');

    const customRenderers = {
        paragraph(paragraph) {
            const {node} = paragraph;

            if(node.children[0].type === 'image'){
                const image = node.children[0];

                return (
                <div className={classes.image}>
                    <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
                </div>
                );
            }
            return <p>{paragraph.children}</p>
        },
        code(code){
            const {language, value} = code;
            return <SyntaxHighlighter style={atomDark} language={language} children={value} />
        }
    }
    return (
        <article className={classes.singlepost}>
            <div className={classes.img}>
                <img src={post.hero_image} width="1624px" />
            </div>
            <div className={classes.header}>
                <PostHeader title={post.title} />
                <h2>{formattedDate}</h2>
            </div>
            
            <div className={classes.content}>
                <ReactMarkdown renderers={customRenderers}>
                    {post.content}
                </ReactMarkdown>
            </div>
        </article>
    )
}

export default PostContent