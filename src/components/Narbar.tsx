"use client";
import { Session } from "inspector";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
const Narbar = () => {
  const pathname = usePathname();
  const { data: session, status: sessionStatus } = useSession();
  // if (!session) {
  //   redirect("/");
  //   return null;
  // }

  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!isAuthPage && (
        <header>
          <div className="py-5 bg-gray-500/40">
            <div className="container">
              <div className="flex justify-between">
                <div className="">Home</div>
                <ul className="flex gap-4">
                  <Link href={"/dashboard"}>
                    <li>Dashboard</li>
                  </Link>
                  {sessionStatus === "authenticated" ? (
                    <div
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <li>LogOut</li>
                    </div>
                  ) : (
                    <ul className="flex gap-4">
                      <Link href={"/login"}>
                        <li>Login</li>
                      </Link>
                      <Link href={"/register"}>
                        <li>Register</li>
                      </Link>
                    </ul>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Narbar;
