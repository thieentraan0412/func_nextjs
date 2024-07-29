"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard =  () => {
  const router =  useRouter();
  const { data: session, status: sessionStatus }:any = useSession();
  console.log(session, sessionStatus);
  useEffect(() => {
    if (!session) router.replace("/");
  }, [sessionStatus]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
    </div>
  );
};

export default Dashboard;
