'use client'
import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const AppBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  console.log({ session });

  const linkClasses = (href: string) =>
    `transition-colors hover:text-blue-500 ${
      pathname === href ? "text-blue-500 font-bold" : "text-gray-700"
    }`;

  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className={linkClasses("/")} href={"/"}>
        Home Page
      </Link>
      {session && (
        <>
          <Link className={linkClasses("/projects")} href={"/projects"}>
            Projects
          </Link>
          <Link className={linkClasses("/tasks")} href={"/tasks"}>
            My Tasks
          </Link>
        </>
      )}
      <SignInButton />
    </header>
  );
};

export default AppBar;
