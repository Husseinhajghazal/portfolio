"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const headerItems = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const Header = () => {
  const [link, setLink] = useState("");

  useLayoutEffect(() => {
    setLink(window.location.href.split("/")[3]);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {headerItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => setLink(item.href)}
            className={twMerge(
              "nav-item",
              link === item.href &&
                "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
