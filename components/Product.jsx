import Image from "next/image";
import Link from "next/link";

const Product = ({ productData }) => {
  return (
    <div className="card-box">
      <span>
        <Image src={productData.images[0]} alt="crypto" fill />
        {/* <img src={productData.image} alt="crypto" /> */}
      </span>
      <h1>{productData.title}</h1>
      <h4>{productData.description}</h4>
      <button className="add-to-cart-btn">
        <Link href={`/product-${productData.id}`}>Add to Cart</Link>
      </button>
    </div>
  );
};

export default Product;
