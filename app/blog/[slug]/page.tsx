import { allPosts, Post } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/mdx-components";

interface PageProps {
  params: {
    slug: string;
  };
}

function getPostFromParams(slug: string) {
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);
  if (!post) {
    notFound();
  }
  return post;
}

const Page = ({ params }: PageProps) => {
  const post = getPostFromParams(params.slug);
  return (
    <div>
      <h1>{post.title}</h1>
      <Mdx code={post.body.code} />
    </div>
  );
};

export default Page;
