import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products/");
  const data = await res.json();

  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

async function ProductCardPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <section className="product-card-container">
      <div className="product-images-wrapper">
        {product.images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={product.title} width={220} height={200} />
          </div>
        ))}
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <div>
          <button>Add to Cart</button>
          <Link href="/products">
            <button>{"<"} Back to Products</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductCardPage;
