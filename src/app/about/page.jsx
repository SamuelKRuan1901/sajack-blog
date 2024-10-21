import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <section className="flex gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-blue-400 font-bold text-xl">About Agency</h2>
        <h1 className="text-5xl font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-xl font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          belive in good ideas flexibility and precission We`re world`s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:text-center max-md:gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl text-blue-500">10 K+</h1>
            <p className="text-sm text-gray-400">Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl text-blue-500">234 K+</h1>
            <p className="text-sm text-gray-400">People reached</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl text-blue-500">5 K+</h1>
            <p className="text-sm text-gray-400">Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative max-md:hidden">
        <Image src="/about.png" alt="about" fill className="object-contain" />
      </div>
    </section>
  );
};

export default AboutPage;
