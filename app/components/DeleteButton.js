"use client";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const deleteProductById = async () => {
    const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.push("/products");
      router.refresh();
    }
  };
  return (
    <button onClick={deleteProductById} className="btn-alert">
      Yes
    </button>
  );
};

export default DeleteButton;
