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
    <>
      <button onClick={deleteProductById} className="btn-alert">
        Yes
      </button>
      <button
        onClick={() => {
          router.push("/products");
        }}
        className="btn-secondary ml-5"
      >
        No
      </button>
    </>
  );
};

export default DeleteButton;
