"use client";
import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useUserAuth } from "../components/UserAuthContext";

export default function TopBar({ showNav, setShowNav }) {
  const { user } = useUserAuth();

  return (
    <div
      className={`fixed bg-white text-gray-800 shadow-md w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-6">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="/man-smiling.jpg"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>
              {user ? (
                <span className="hidden md:block font-medium text-gray-700">
                  {user.email}
                </span>
              ) : (
                "Loading"
              )}

              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>

          <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
            <div className="p-1">
              <Menu.Item>
                <Link
                  href="#"
                  className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                >
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="#"
                  className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                >
                  <CreditCardIcon className="h-4 w-4 mr-2" />
                  Billing
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="#"
                  className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                >
                  <Cog8ToothIcon className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
