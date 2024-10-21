"use client";
import Image from "next/image";
import { useState } from "react";
import Navlink from "./Navlink";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Contact", path: "/contact" },
  { id: 3, name: "Blog", path: "/blog" },
];
const Links = () => {
  const session = useSession();
  const status = session?.status;

  const [open, setOpen] = useState(false);
  // temporary
  // const session = true

  return (
    <div className="flex gap-8 h-full items-center">
      <div className="flex gap-8 h-full items-center max-sm:hidden">
        {links.map((link) => (
          <Navlink item={link} key={link.id} />
        ))}
        {status === "authenticated" && (
          <>
            <Navlink item={{ name: "Profile", path: "/profile" }} />
            <button
              className="bg-slate-500 text-black p-2 rounded-md"
              onClick={signOut}
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <Navlink item={{ name: "login", path: "/login" }} />
        )}
      </div>
        <Image
          className="sm:hidden"
          src={"/menu.png"}
          alt=""
          width={24}
          height={24}
          onClick={() => setOpen(!open)}
      />
      {open && (
        <div
          className="bg-[#0c0d22] sm:hidden fixed top-0 right-0 w-60 h-full 
        flex flex-col justify-center items-center gap-8 z-10"
        >
            <Image
              src={"/menu.png"}
              alt="menu"
              width={24}
              height={24}
              onClick={() => setOpen(!open)}
              className='absolute top-6 right-4 '
            />
          {links.map((link) => (
            <Navlink item={link} key={link.id} />
          ))}
          {status === "authenticated" && (
            <>
              <Navlink item={{ name: "Profile", path: "/profile" }} />
              <button
                className="bg-slate-500 text-black p-2 rounded-md"
                onClick={signOut}
              >
                Logout
              </button>
            </>
          )}
          {status === "unauthenticated" && (
            <Navlink item={{ name: "login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
