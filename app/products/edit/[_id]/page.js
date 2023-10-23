"use client";

import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";

const EditProduct = async () => {
  const router = useRouter();
  const id = router.pathname;
  return <>edit form here</>;
};

export default EditProduct;
