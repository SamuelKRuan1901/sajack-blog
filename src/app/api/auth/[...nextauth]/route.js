import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/lib/models";
import bcryptjs from "bcryptjs";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const email = credentials?.email;
        const password = credentials?.password;

        await mongoose.connect(process.env.MONGO);
        const user = await User.findOne({ email });

        if (!user) {
          console.log("User does not exist");
          return null;
        }

        const passwordOk = bcryptjs.compareSync(password, user.password);

        if (!passwordOk) {
          console.log("passwords do not match");
          return false;
        }
        return user;
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
