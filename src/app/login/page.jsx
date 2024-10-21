"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      await signIn("credentials", { email, password });
      console.log("successed");
      redirect("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="text-center py-14">
      <h1 className="font-semibold text-5xl my-12">Login</h1>
      <form
        className="w-72 flex flex-col gap-4 mx-auto my-4"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-500 rounded-md">
          Submit
        </button>
      </form>
      <Link className="text-yellow-200" href={"/register"}>
        Register now ?
      </Link>
      <div className="w-72 flex flex-col gap-4 mx-auto">
        or login with Providers
        <button className="bg-white font-medium text-black p-2 rounded-md">
          Github
        </button>
        <button className="bg-white font-medium text-black p-2 rounded-md">
          Google
        </button>
        <button className="bg-white font-medium text-black p-2 rounded-md">
          Facebook
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
