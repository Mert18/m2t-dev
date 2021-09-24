import Container from "../components/Container";
import classes from "../styles/blog.module.css";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import BlogPost from "../components/BlogPost";

export default function Blog({ posts }) {
  return (
    <Container>
      <div className={classes.blog}>
        <div className={classes.blogposthome}>
          <ul>
            {posts.map((post) => (
              <li key={post.filePath}>
                <BlogPost post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
