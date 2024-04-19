import Product from "../../../components/Product";

import { fetchProducts } from "../../actions";

import styles from "../../../components/ProductsList.module.css";

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
    <div className={styles["products-main-container"]}>
      <h1 className={styles["products-heading"]}>Products</h1>
      <div className={styles["products-wrapper"]}>
        <div className={styles["cards-container"]}>
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
