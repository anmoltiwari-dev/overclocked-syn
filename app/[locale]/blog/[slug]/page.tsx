import { getPostById } from "@/lib/api";
import React from "react";
import Image from "next/image";
import RichTextRenderer from "@/components/RichTextRenderer";

const BlogPage = async ({ params }) => {
  const { locale, id } = await params;
  const postData = await getPostById(id, locale);
  return (
    <div className="flex flex-col items-center p-4">
      <Image
        src={`https:${postData?.coverImage}`}
        alt={postData?.title as string}
        height={200}
        width={400}
        className="w-full max-h-[400px] object-cover"
      />
      <h1 className="text-5xl font-extrabold text-gray-100 my-6">
        {postData?.title as string}
      </h1>
      <div className="flex items-center justify-between w-full my-4 text-gray-300">
        <h3>Author: {postData?.author as string}</h3>
        <h3>
          Published on:{" "}
          {new Date(postData?.publishedDate as string).toLocaleDateString()}
        </h3>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-8">
        <RichTextRenderer content={postData?.body} />
      </article>
    </div>
  );
};

export default BlogPage;
