import DeleteButton from "@/app/components/DeleteButton";

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

export default async function DeleteProduct({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { title, description, price } = product;

  return (
    <>
      <h2 className="md:w-1/2 md:pt-20 max-w-96 text-center m-auto">
        Are you sure you want to delete this product listing? This action cannot
        be undone.
      </h2>
      <div className="flex items-center justify-center">
        <DeleteButton id={id} />
        <button className="btn-secondary md:ml-5">No</button>
      </div>
    </>
  );
}
