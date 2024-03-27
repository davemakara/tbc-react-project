import { Fragment } from "react";

import Product from "./Product";

import { homepageCards } from "../assets/store/store";

const ProductsList = () => {
  return (
    <Fragment>
      <h1 className="products-heading">Products</h1>
      <div className="products-wrapper">
        <div className="cards-container">
          {homepageCards.map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsList;
