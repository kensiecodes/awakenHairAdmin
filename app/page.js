"use client";

import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";

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
              <p>page</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
