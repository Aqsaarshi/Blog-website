import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

// Define types for the post and author
interface Author {
  bio: string;
  image: string;
  name: string;
}

interface Post {
  title: string;
  summary: string;
  image: string;
  content: any;
  author: Author;
}

export const revalidate = 10; //seconds

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "post" && slug.current=="${slug}"]{
    title,summary,image,content,
    author->{bio,image,name}
  }[0]`;

  const post: Post | null = await client.fetch(query);

  // Ensure the post exists before rendering
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 bg-rose-100">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image)}
        width={500}
        height={500}
        alt={post.title}
        className="rounded"
      />

      {/* Blog Summary */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-yellow-400">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Author Info */}
      <section className="px-2 sm:px-8 md:px-12 lg:px-14 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlForImage(post.author.image)}
          width={200}
          height={200}
          alt={post.author.name}
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">
            {post.author.name}
          </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={post.content} />
      </section>
    </article>
  );
}
