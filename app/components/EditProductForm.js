"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({ id, title, description, price }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2 className="text-2xl">
        Edit <span className="text-leaf">{title}</span>
      </h2>

      <label>Product</label>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        required={true}
        type="text"
        placeholder="Product Name"
      />

      <label>Description</label>
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder="Description"
      />

      <label>Price (in USD)</label>
      <input
        type="text"
        placeholder="Price"
        required={true}
        value={newPrice}
        onChange={(e) => {
          setNewPrice(e.target.value);
        }}
      />

      <button className="btn-primary">Update Product</button>
    </form>
  );
}
