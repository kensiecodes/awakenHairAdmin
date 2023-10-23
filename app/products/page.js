import Link from "next/link";
import Edit from "../components/icons/Edit";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function Products() {
  const { products } = await getProducts();

  return (
    <>
      <Link className="bg-storm py-1 px-2 rounded " href="/products/new">
        Add new product
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={products._id}>
              <td>{products.title}</td>
              <td>
                <Link className="" href={`/products/edit/${products._id}`}>
                  <Edit /> Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
