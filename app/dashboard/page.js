"use client";

import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-between">
        <h2>Hello, {session?.user?.name}</h2>
        <div className="flex bg-storm gap-2 h-10 rounded-lg pr-10 overflow-hidden items-center">
          <img src={session?.user?.image} className="w-10 h-10 " />
          {session?.user?.name}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
