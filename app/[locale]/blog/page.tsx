import { getAllPosts } from "@/lib/api";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogList = async ({ params }) => {
  const { locale } = await params;
  const posts = await getAllPosts(locale);
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((p) => {
        return (
          <Link href={`/${locale}/blog/${p.id}`} key={p.id}>
            <div
              className="w-[300px] h-[350px] border-2 border-gray-500 m-2 p-2 flex flex-col items-center"
              key={p.id}
            >
              <Image
                src={`https:${p.coverImage}`}
                alt={p.title as string}
                width={200}
                height={200}
                className="w-full max-h-[300px] object-cover"
              />
              <div className="mt-2">
                <h2 className="text-xl">{p.title as string}</h2>
                <hr className="my-2" />
                <p>{p.excerpt as string}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
