import { User } from "@/lib/models";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();

  mongoose.connect(process.env.MONGO);
  const pass = body.password;
  const email = body.email;

  const user = User.findOne({ email });

  if (user) {
    new Error("User already exists");
  }

  const notHashedPassword = pass;
  const salt = bcryptjs.genSaltSync(10);
  body.password = bcryptjs.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
