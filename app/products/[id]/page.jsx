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
    <div>
      <div>
        <div>
          <div className="flex flex-wrap ">
            {product.images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={product.title}
                  width={200}
                  height={300}
                />
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
        </div>
      </div>
    </div>
  );
}

export default ProductCardPage;
