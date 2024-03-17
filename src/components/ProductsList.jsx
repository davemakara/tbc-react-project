import { Fragment } from "react";
import btcImg1 from "../assets/image/btc1.jpg";
import btcImg2 from "../assets/image/btc2.jpg";
import btcImg3 from "../assets/image/btc3.jpg";
import btcImg4 from "../assets/image/btc4.jpg";
import Product from "./Product";

const cards = [
  {
    title: "Product 1",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg1,
    id: 1,
  },
  {
    title: "Product 2",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg2,
    id: 2,
  },
  {
    title: "Product 3",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg3,
    id: 3,
  },
  {
    title: "Product 4",
    description:
      "Bitcoin is the first decentralized cryptocurrency. Nodes in the peer-to-peer bitcoin network verify transactions through cryptography and record them in a blockchain.",
    image: btcImg4,
    id: 4,
  },
];

const ProductsList = () => {
  return (
    <Fragment>
      <h1 className="products-heading">Products</h1>
      <div className="products-wrapper">
        <div className="cards-container">
          {cards.map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsList;
