"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  return (
    <div className="center mt-[3.6rem] text-gray-800 flex flex-col justify-center items-center">
      <h1>Logout</h1>
      <button
        className=" bg-slate-400 mt-8 rounded-xl"
        onClick={() => router.push("/login")}
      >
        back to login
      </button>
    </div>
  );
};

export default Logout;
