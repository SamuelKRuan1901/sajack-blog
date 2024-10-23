import { User } from "@/lib/models";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();

  mongoose.connect(process.env.MONGO);
  const pass = body.password;
  const email = body.email;
  const username = body.username;

  const user = await User.findOne({ email });
  const userName = await User.findOne({ username });

  if (user) {
    return Response.json({error: "User already exists"}, {status: 400});
  }
  if (userName) {
    return Response.json({error: "Username already exists"}, {status: 401});
  }

  const notHashedPassword = pass;
  const salt = bcryptjs.genSaltSync(10);
  body.password = bcryptjs.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);
  return Response.json({message: "Success in register"},{status: 200});
}
