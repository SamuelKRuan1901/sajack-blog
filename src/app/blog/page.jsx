import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {

  const posts = await getPosts();

  return (
  <section className="flex flex-wrap gap-5 md:gap-14 justify-around max-sm:justify-center">
    {posts.map(post => (
      <div key={post.id} className="flex flex-col gap-4 w-72 h-auto bg-slate-800 rounded-lg  p-4">
        <Image className="rounded-md" src={post.img} alt="postImg" width={300} height={500}/>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <p>
            {post.desc}
          </p>
          <Link className="bg-slate-500 rounded-md p-2" href={`/blog/${post.slug}`}>Read more</Link>
        </div>
      </div>
    ))}
  </section>
  )
}

export default BlogPage;