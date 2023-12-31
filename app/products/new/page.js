"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NewProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, price }),
      });

      if (res.ok) {
        router.push("/products");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h2 className="text-2xl">Add Product</h2>

        <label>Product</label>
        <input
          type="text"
          required={true}
          placeholder="Product Name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>

        <label>Price (in USD)</label>
        <input
          type="text"
          placeholder="Price"
          required={true}
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </>
  );
};

export default NewProducts;
