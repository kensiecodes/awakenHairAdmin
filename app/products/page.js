"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Products = () => {
  const { data: session } = useSession();
  return (
    <>
      <Link className="bg-storm py-1 px-2" href="/products/new">
        Add new product
      </Link>
    </>
  );
};

export default Products;
