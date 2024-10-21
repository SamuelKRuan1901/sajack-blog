"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${
        pathName === item.path && "bg-white text-black rounded-md p-1"
      }`}
      href={item.path}
    >
      {item.name}
    </Link>
  );
};

export default Navlink;
