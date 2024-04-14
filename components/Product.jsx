import Image from "next/image";
import Link from "next/link";

const Product = ({ productData }) => {
  return (
    <div className="card-box">
      <span>
        <Image src={productData.images[0]} alt="crypto" fill />
      </span>
      <h1>{productData.title}</h1>
      <h4>{productData.description}</h4>
      <Link href={`/products/${productData.id}`}>
        <button className="add-to-cart-btn">See more</button>
      </Link>
    </div>
  );
};

export default Product;
