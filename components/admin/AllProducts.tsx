import { getProducts } from "@/app/api";
import { ProductsStoreProps } from "@/types/types";

const AllProducts = async () => {
  const products = await getProducts();

  return (
    <div className="w-4/5 mx-auto">
      <p className="text-[#000] dark:text-white text-4xl font-semibold text-center mb-8">
        Products
      </p>
      <table className="w-full">
        <th className="w-full h-20 flex justify-between bg-red border-b border-b-white">
          <td className="w-[150px] h-20 flex justify-center items-center">
            id
          </td>
          <td className="w-[150px] h-20 flex justify-center items-center">
            Title
          </td>
          <td className="w-[150px] h-20 flex justify-center items-center">
            Category
          </td>
          <td className="w-[150px] h-20 flex justify-center items-center">
            Price
          </td>
          <td className="w-[150px] h-20 flex justify-center items-center">
            Stock
          </td>
        </th>
        {products?.map((product: ProductsStoreProps) => (
          <tr
            key={product.id}
            className="w-full flex justify-between border-b border-b-white"
          >
            <td className="w-[150px] h-20 flex justify-center items-center">
              {product.id}
            </td>
            <td className="w-[150px] h-20 flex justify-center items-center">
              {product.title}
            </td>
            <td className="w-[150px] h-20 flex justify-center items-center">
              {product.category}
            </td>
            <td className="w-[150px] h-20 flex justify-center items-center">
              {product.price}
            </td>
            <td className="w-[150px] h-20 flex justify-center items-center">
              {product.stock}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllProducts;
