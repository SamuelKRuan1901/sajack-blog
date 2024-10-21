import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/PostUser";

const BlogSinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <section className="flex gap-8 max-md:flex-col max-sm:justify-center bg-slate-800 p-4 rounded-md">
      {post?.img && (
        <div className="flex items-center justify-center">
          <Image src={post.img} alt="postImg" width={400} height={400} />
        </div>
      )}
      <div className="w-full flex flex-col gap-8">
        <h1 className="text-5xl font-semibold">{post?.title}</h1>
        <div className="flex gap-8 max-sm:flex-col">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className="flex sm:flex-col items-center gap-10 sm:gap-3">
            <span className="text-lg font-semibold text-slate-400">Published</span>
            <span className="">{post?.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className="md:w-full w-[300px]">{post?.desc}</div>
      </div>
    </section>
  );
};

export default BlogSinglePage;
