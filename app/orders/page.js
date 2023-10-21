"use client";

import { useSession } from "next-auth/react";

const Orders = () => {
  const { data: session } = useSession();
  return <>Orders</>;
};

export default Orders;
