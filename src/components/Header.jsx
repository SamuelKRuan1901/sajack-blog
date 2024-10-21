import Link from "next/link";
import Links from "@/components/Links";

const Header = () => {
  return (
    <header className="h-[70px] flex justify-between items-center px-4">
      <Link className="text-3xl font-semibold" href={"/"}>
        Sajak.
      </Link>
      <Links />
    </header>
  );
};

export default Header;
