"use client";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/mdx-components";
import Link from "next/link";
import PostHeader from "@/components/post/PostHeader";
import useLanguage from "@/hooks/useLanguage";

interface PageProps {
  params: {
    slug: string;
  };
}

function getPostFromParams(slug: string) {
  const post = allPosts.filter((post) => post.language === "en").find((p) => p._raw.flattenedPath.split("/").slice(1).join("/") === slug);
  if (!post) {
    notFound();
  }
  return post;
}

const handleBackToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Post = ({ params }: PageProps) => {
  const language = useLanguage();
  const post = getPostFromParams(params.slug);
  return (
    <div className="flex flex-col justify-center items-center md:p-4 p-0 text-text">
      <div className="w-full sm:w-4/5 xl:w-1/2">
        <PostHeader post={post} />

        <div className="flex flex-col justify-center items-start md:py-4 text-xs xl:text-sm overflow-auto bg-primary p-4 border border-secondary rounded-md">
          <Mdx code={post.body.code} />
        </div>
        <div className="flex justify-between items-center">
          <button onClick={() => handleBackToTop()}>Back to Top</button>
          <div className="py-4">
            <Link href={`/${language}`}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;