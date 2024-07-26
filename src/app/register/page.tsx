"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Register = () => {
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
    seterror('');

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
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if(res.status === 500)
        {
            seterror('server error');
        }
      if (res.status === 400) {
        seterror("this is existing registration")
      }
      if(res.status === 200)
        {
            seterror('')
            router.push('/login')
        }
    } catch (error: any) {
      seterror("Error Again");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container">
        <div className=" my-auto max-w-[480px] mx-auto bg-gray-200/50 p-10 lg:p-20">
          <h1 className="text-center text-[48px] pb-12 ">Register</h1>
          <form onSubmit={handlefuncion} className="mx-auto pb-20">
            <div className="flex flex-col pb-6">
              <label htmlFor="">Email: </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                className="px-5 py-3 bg-gray-200"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="">Password: </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="px-5 py-3 bg-gray-200"
              />
            </div>
            <button className="py-3 px-6 float-right border-2 border-gray-300 rounded-[12px] ">
              Submit
            </button>
          </form>
          <p className=" text-red-500 mx-auto text-center">{error && error} </p>
          <p className="text-center pb-3">--OR--</p>
          <Link href={"/login"} className="text-center block font-semibold">
            Login with existing account{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
