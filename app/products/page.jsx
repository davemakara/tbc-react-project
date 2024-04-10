// "use client";

// import Image from "next/image";

// import { useEffect, useState } from "react";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       console.log(data.products);

//       setProducts(data.products.slice(0, 30));
//     };

//     fetchData();
//   }, []);

//   return (
//     <main className="products-main-wrapper">
//       {products.map((product) => (
//         <div key={product.id} className="products-box">
//           <Image src={product.images[0]} alt="image" width={400} height={200} />
//           <h2>{product.title}</h2>
//           <p className="category-p">{product.category}</p>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <div className="btn-box">
//             <button>Buy</button>
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// };

// export default ProductsPage;
