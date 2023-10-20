import Sparkles from "./icons/Sparkles";
import Home from "./icons/Home";
import Order from "./icons/Order";
import Settings from "./icons/Settings";
import Products from "./icons/Products";
import Link from "next/link";

export default function Navbar({ session }) {
  return (
    <>
      <header className="p-4 dark:bg-jade dark:text-gray-100 md:w-48">
        <div className="container flex md:flex-col justify-between mx-auto">
          <div className="flex flex-row ">
            <Sparkles />
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2  md:border-b-2 md:border-white md:mb-2 "
            >
              <h1 className="text-2xl">awaken organics</h1>
            </a>
          </div>
          {session && (
            <div className="flex items-center px-1 my-5 max-md:hidden">
              Admin: {session.user.name}
            </div>
          )}

          <nav className="items-stretch hidden md:flex md:flex-col">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="transition ease-in-out duration-150 hover:bg-white w-40 hover:text-jade flex px-1 rounded-lg gap-1 j  py-1  border-b-2 dark:border-transparent"
              >
                <Home />
                Dashboard
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="transition ease-in-out duration-150 hover:bg-white w-40 hover:text-jade flex px-1 rounded-lg gap-1 j  py-1  border-b-2 dark:border-transparent"
              >
                <Products />
                Products
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="transition ease-in-out duration-150 hover:bg-white w-40 hover:text-jade flex px-1 rounded-lg gap-1 j  py-1  border-b-2 dark:border-transparent"
              >
                <Order />
                Orders
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="transition ease-in-out duration-150 hover:bg-white w-40 hover:text-jade flex px-1 rounded-lg gap-1 j  py-1  border-b-2 dark:border-transparent"
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
                  className="self-center px-8 py-3 rounded"
                  onClick={() => signIn("google")}
                >
                  Sign in
                </button>
                <button className="self-center px-8 py-3 font-semibold rounded dark:bg-storm dark:text-charcoal">
                  Sign up
                </button>
              </div>
              <button className="p-4 lg:hidden">
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
            </>
          )}
        </div>
      </header>
    </>
  );
}
