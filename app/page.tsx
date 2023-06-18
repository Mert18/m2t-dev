import BlogPosts from "@/components/blog/BlogPosts";

export default async function Home() {
  return (
    <div>
      <div className="p-4 flex justify-center">
        <BlogPosts />
      </div>
    </div>
  );
}
