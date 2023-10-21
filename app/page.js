"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import NavBar from "@/app/components/Navbar";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="">
      <div className="">
        <div className=" m-auto bg-white">
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="bg-white p-2 px-4 rounded-lg"
            >
              Login with Google
            </button>
          ) : (
            <>
              <p>dashboard</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
