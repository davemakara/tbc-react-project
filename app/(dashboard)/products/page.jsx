import Product from "../../../components/Product";

import { fetchProducts } from "../../actions";

const ProductsList = async ({ isClicked, searchInp }) => {
  //   const [sortedData, setSortedData] = useState([...productsData]);
  //   const [filteredData, setFilteredData] = useState([...productsData]);

  //   useEffect(() => {
  //     if (isClicked) {
  //       setSortedData(
  //         [...productsData].sort((a, b) => a.title.localeCompare(b.title))
  //       );
  //     } else {
  //       setSortedData([...productsData]);
  //     }
  //   }, [isClicked, productsData]);

  //   useEffect(() => {
  //     const filtered = sortedData.filter((item) =>
  //       item.title.toLowerCase().startsWith(searchInp.toLowerCase())
  //     );
  //     setFilteredData(filtered);
  //   }, [searchInp, sortedData]);

  const data = await fetchProducts();

  return (
    <div className="min-h-screen bg-mainLightBG py-[8rem]">
      <h1 className="pt-[1rem] pl-[3rem] text-[#000] font-semibold text-[30px] md:py-[2rem] px-16">
        Products
      </h1>
      <div className="w-full block pt-[2rem] pl-12 pr-12 sm:flex flex-col items-center px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5">
          {/* {(searchInp === "" ? sortedData : filteredData).map((product) => (
            <Product productData={product} key={product.id} />
          ))} */}
          {data.products.map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
