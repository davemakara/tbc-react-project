"use client";
import { Fragment, useState } from "react";

import Product from "./Product";

import { homepageCards } from "./store";

const ProductsList = ({ isClicked, filteredData, searchInp }) => {
  const cardsCopy = [...homepageCards];

  const sortedCards = cardsCopy.sort((a, b) => a.title.localeCompare(b.title));

  const renderCards = isClicked ? sortedCards : homepageCards;

  return (
    <Fragment>
      <h1 className="products-heading">Products</h1>
      <div className="products-wrapper">
        <div className="cards-container">
          {(searchInp === "" ? renderCards : filteredData).map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsList;
