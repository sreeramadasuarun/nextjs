"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";
import { useState, useEffect, Fragment } from "react";
import TopBar from "./components/TopBar";
import { Transition } from "@headlessui/react";
import { UserAuthContextProvider } from "./components/UserAuthContext";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }
  // useEffect(() => {
  //   <TopBar />;
  // });

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <html lang="en">
        <UserAuthContextProvider>
          <body className="flex flex-col">
            <>
              <TopBar showNav={showNav} setShowNav={setShowNav} />
              <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-[400ms]"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <SideBar showNav={showNav} />
              </Transition>
            </>

            <main
              className={`pt-16 transition-all duration-[400ms] ${
                showNav && !isMobile ? "pl-56" : ""
              }`}
            >
              {children}
            </main>
          </body>
        </UserAuthContextProvider>
      </html>
    </>
  );
}
