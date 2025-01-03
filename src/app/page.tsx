import { client } from "@/sanity/lib/client";
import post from "@/sanity/schemaTypes/postType";
import BlogCard from "./component/BlogCard";
export const revalidate = 10;
export default async function Home() {
  const query = `*[_type == "post"] | order(_createdAt asc){
  summary,title,image,
    "slug":slug.current
  
}`;
  const posts: Post[] = await client.fetch(query);
  //console.log(posts);
  return (
    <main className="flex min-h-screen flex-col bg-rose-100">
      <h1 className="text-5xl font-bold uppercase my-12 text-center text-dark ">
        Most Recent Blog
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}
