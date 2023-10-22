"use client";

import Sparkles from "./icons/Sparkles";
import Home from "./icons/Home";
import Order from "./icons/Order";
import Settings from "./icons/Settings";
import Products from "./icons/Products";
import Logout from "./icons/Logout";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();

  const pathname = usePathname();

  const inactiveLink =
    "transition ease-in-out duration-150 hover:bg-white w-40 hover:text-charcoal flex px-1 rounded-lg gap-1  py-1 ";

  const activeLink = inactiveLink + "bg-storm text-charcoal";

  return (
    <>
      <header className="p-4 dark:bg-jade dark:text-gray-100 md:w-48">
        <div className="container flex md:flex-col justify-between mx-auto">
          <div className="flex flex-row ">
            <Sparkles />
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Back to homepage"
              className="flex items-center p-2  md:border-b-2 md:border-white md:mb-2 "
            >
              <h1 className="text-2xl">awaken organics</h1>
            </a>
          </div>
          {session && (
            <div className="md:flex items-center px-1 my-5 hidden">
              Admin: {session.user.name}
            </div>
          )}

          <nav className="items-stretch hidden md:flex md:flex-col">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/dashboard"
                className={pathname == "/dashboard" ? activeLink : inactiveLink}
              >
                <Home />
                Dashboard
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/products"
                className={pathname == "/products" ? activeLink : inactiveLink}
              >
                <Products />
                Products
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/orders"
                className={pathname == "/orders" ? activeLink : inactiveLink}
              >
                <Order />
                Orders
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/settings"
                className={pathname == "/settings" ? activeLink : inactiveLink}
              >
                <Settings />
                Settings
              </Link>
            </li>
          </nav>
          {!session ? (
            <>
              <div className="items-center flex-shrink-0 hidden md:flex flex-col">
                <button
                  className="btn-primary"
                  onClick={() => signIn("google")}
                >
                  Sign in
                </button>
              </div>
              {/* dropdown */}
              <button className="p-4 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent md:hidden">
                Admin: {session.user.name}
              </div>
              <div className="flex justify-end">
                <button
                  className="mt-2"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <Logout />
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
