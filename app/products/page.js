"use client";

import { useSession } from "next-auth/react";

const Products = () => {
  const { data: session } = useSession();
  return <>Products</>;
};

export default Products;
