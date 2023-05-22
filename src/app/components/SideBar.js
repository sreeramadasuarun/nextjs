"use client";
import { forwardRef } from "react";
import React, { useState } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { VscArchive, VscPersonAdd, VscGear } from "react-icons/vsc";
import { useUserAuth } from "../components/UserAuthContext";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  const { user, logOut } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div>
        <div>
          <section className="  z-50 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 ">
            <div className="w-[11rem]">
              <div className="mt-5 px-6 py-4 -ml-[1rem] ">
                <Link href="./" title="home">
                  <img
                    src="https://streamsss.com/wp-content/themes/streamsss/assets/images/logo/logo-head.png"
                    className="w-[11rem] "
                    alt="tailus logo"
                  />
                </Link>
                <p className="font-semibold	text-slate-400	tracking-wide	  py-4 text-left">
                  Dashboard
                </p>
              </div>

              {user ? (
                <ul className="space-y-2 tracking-wide mt-2 bg-slate-100 rounded-xl	 ">
                  {user.email === "user@gmail.com" ? (
                    <>
                      <Link
                        href="/profile"
                        className="relative tracking-widest		 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-1 px-3"
                      >
                        <VscPersonAdd />
                        <span className="font-semibold ml-5">Profile</span>
                      </Link>
                    </>
                  ) : (
                    " "
                  )}

                  {user.email === "teamleader@gmail.com" ? (
                    <>
                      <Link
                        href="/profile"
                        className="relative tracking-widest		 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-1 px-3"
                      >
                        <VscPersonAdd />
                        <span className="font-semibold ml-5">Profile</span>
                      </Link>
                      <Link
                        href="/employees"
                        className="relative tracking-widest	 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-1 px-3"
                      >
                        <VscArchive />
                        <span className="font-semibold ml-5">Employees</span>
                      </Link>
                    </>
                  ) : (
                    " "
                  )}
                  {user.email === "superadmin@gmail.com" ? (
                    <>
                      <Link
                        href="/profile"
                        className="relative tracking-widest		 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-1 px-3"
                      >
                        <VscPersonAdd />
                        <span className="font-semibold ml-5">Profile</span>
                      </Link>
                      <Link
                        href="/employees"
                        className="relative tracking-widest	 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-1 px-3"
                      >
                        <VscArchive />
                        <span className="font-semibold ml-5">Employees</span>
                      </Link>
                      <Link
                        href="/teamleader"
                        className="relative tracking-widest	 flex items-center space-x-4 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 py-1 px-3"
                      >
                        <VscGear />
                        <span className="font-semibold ml-5">Team Leaders</span>
                      </Link>
                    </>
                  ) : (
                    " "
                  )}
                </ul>
              ) : (
                ""
              )}
            </div>

            {user && (
              <div className="px-6  pt-6 flex justify-between items-center border-t pb-6">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>

                  <Link
                    onClick={handleSignOut}
                    href="/logout"
                    className="group-hover:text-gray-700 "
                  >
                    Logout
                  </Link>
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
