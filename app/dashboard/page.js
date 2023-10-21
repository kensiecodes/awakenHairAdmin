"use client";

import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  return <>dashboard</>;
};

export default Dashboard;
