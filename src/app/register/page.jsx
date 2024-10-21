"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const router = useRouter();

  const handleRegister = async (ev) => {
    ev.preventDefault();
    if (password !== passwordConfirm) {
      return false;
    }

    try {
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-center py-14">
      <h1 className="font-semibold text-5xl my-12">Register</h1>
      <form
        className="w-72 flex flex-col gap-4 mx-auto my-4"
        onSubmit={handleRegister}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="email"
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
        <input
          type="password"
          placeholder="password confirm"
          value={passwordConfirm}
          onChange={(ev) => setPasswordConfirm(ev.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-500 rounded-md">
          Submit
        </button>
      </form>
      <div>
        already have an account?{" "}
        <Link href={"/login"} className="underline">
          Login here
        </Link>
      </div>
    </section>
  );
};

export default RegisterPage;
