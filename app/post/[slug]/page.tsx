import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/mdx-components";
import Link from "next/link";

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
    <div className="flex flex-col justify-center items-center p-4">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col justify-center items-start text-sm py-4">
          <h1 className="font-bold text-xl">{post.title}</h1>
          <p className="py-4">{post.description}</p>
          <p className="text-serendipity font-bold">{post.date}</p>
        </div>
        <div className="flex flex-col justify-center items-start p-2 md:py-4 md:p-0 text-sm overflow-auto">
          <Mdx code={post.body.code} />
        </div>
      </div>
      <div>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Page;
