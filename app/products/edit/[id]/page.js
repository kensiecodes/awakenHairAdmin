import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import EditProductForm from "@/app/components/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { title, description, price } = product;

  return (
    <EditProductForm
      id={id}
      title={title}
      description={description}
      price={price}
    />
  );
}
