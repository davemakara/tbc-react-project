"use client";

import Image from "next/image";

const Product = ({ productData }) => {
  return (
    <div className="card-box">
      <span>
        <Image src={productData.image} alt="crypto" fill />
        {/* <img src={productData.image} alt="crypto" /> */}
      </span>
      <h1>{productData.title}</h1>
      <h4>{productData.description}</h4>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
