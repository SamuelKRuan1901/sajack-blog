import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User, Post } from "@/lib/models";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function GET(req) {
  mongoose.connect(process.env.MONGO);

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  let filterUser = {};
  if (_id) {
    filterUser = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    filterUser = { email };
  }

  const user = await User.findOne(filterUser).lean();
  const users = await User.find();
  const posts = await Post.find();
  const data = { users, posts };

  return Response.json({ ...user, data });
}
