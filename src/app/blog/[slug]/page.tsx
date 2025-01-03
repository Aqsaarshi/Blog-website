//is page mai jo blog ha uska content hoga pora
import Image from "next/image";
import React from "react";
import men from "../../../../public/image/men.jpg";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
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
  const post = await client.fetch(query);
  //console.log(post);

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 bg-rose-100">
      {/**blog title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark:text-light">
        {post.title}
      </h1>
      {/**Featured image  */}
      <Image
        src={urlForImage(post.image)}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />
      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-yellow-400">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>
      <section className="px-2 sm:px-8 md:px-12 lg:px-14 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlForImage(post.author.image)}
          width={200}
          height={200}
          alt="author"
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
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={post.content} />
      </section>
    </article>
  );
}
