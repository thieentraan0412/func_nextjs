"use client";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Dashboard =  () => {
    const { data: session, status: sessionStatus } = useSession();
  console.log("oekoe",session,"okw")
//   if (!session) {
//     redirect("/");
//   }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
    </div>
  );
};

export default Dashboard;