"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [error, seterror] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const handlefuncion = async (e: any) => {
    e.preventDefault();
    seterror("");

    const email = e.target[0].value;
    const password = e.target[1].value;

    const isEmail = (email: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };

    if (!isEmail(email)) {
      seterror("Invalid email");
      return;
    }
    if (!password || password.length < 6) {
      seterror("Password must be at least 6 characters long");
      return;
    }
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      seterror("invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      seterror("");
    }
  };
  


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container">
        <div className=" my-auto max-w-[480px] mx-auto bg-gray-100/50 p-10 lg:p-20">
          <h1 className="text-center text-[48px] pb-12 ">Login</h1>
          <form onSubmit={handlefuncion} className="mx-auto pb-20">
            <div className="flex flex-col pb-6">
              <label htmlFor="">Email: </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                className="px-5 py-3 bg-gray-100/50"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="">Password: </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="px-5 py-3 bg-gray-100/50"
              />
            </div>
            <button className="py-3 px-6 float-right border-2 border-gray-300 rounded-[12px] ">
              Login
            </button>
          </form>
          <p className=" text-red-500 mx-auto text-center">{error && error} </p>
          <p className="text-center pb-3">--OR--</p>
          <Link href={"/register"} className="text-center block font-semibold">
            Register{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
