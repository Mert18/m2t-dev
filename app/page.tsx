import AllPosts from "@/components/post/AllPosts";

export const metadata = {
  title: "m2t.dev - Blog",
  description: "A Software Engineer Blog",
};

export default async function Home() {
  return (
    <div>
      <div className="p-4 flex justify-center">
        <AllPosts />
      </div>
    </div>
  );
}
