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

export default function Navbar() {
  const { data: session } = useSession();

  const findActivePage = (url) => {
    if (url.includes("dashboard")) {
      return "dashboard";
    } else if (url.includes("products")) {
      return "products";
    } else if (url.includes("orders")) {
      return "orders";
    } else if (url.includes("settings")) {
      return "settings";
    } else {
      return null;
    }
  };

  const [activePage, setActivePage] = useState(
    findActivePage(window.location.href)
  );

  useEffect(() => {
    setActivePage(findActivePage(window.location.href));
  }, [findActivePage(window.location.href)]);

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
                onClick={() => setActivePage("dashboard")}
                className={
                  activePage == "dashboard" ? activeLink : inactiveLink
                }
              >
                <Home />
                Dashboard
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/products"
                onClick={() => setActivePage("products")}
                className={activePage == "products" ? activeLink : inactiveLink}
              >
                <Products />
                Products
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/orders"
                onClick={() => setActivePage("orders")}
                className={activePage == "orders" ? activeLink : inactiveLink}
              >
                <Order />
                Orders
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="/settings"
                onClick={() => setActivePage("settings")}
                className={activePage == "settings" ? activeLink : inactiveLink}
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
                  className="mt-2 self-center px-5 py-3 font-semibold rounded hover:scale-110 transition ease-in-out duration-150 dark:bg-storm dark:text-charcoal"
                  onClick={() => signIn("google")}
                >
                  Sign in
                </button>
              </div>
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
