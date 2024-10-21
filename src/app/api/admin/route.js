import { Post, User } from "@/lib/models";
import mongoose from "mongoose";

export async function GET(req) {
  mongoose.connect(process.env.MONGO);

  const users = await User.find();
  const posts = await Post.find();

  const data = {'users': users, 'posts': posts};

  return Response.json({data});
}
