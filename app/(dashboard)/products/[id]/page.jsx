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
    <section className="w-full min-h-screen bg-mainLightBG pt-[10rem] pb-[6rem] flex flex-col items-center">
      <div className="w-4/5 bg-white py-4 px-4">
        <div className="w-full flex flex-wrap gap-5">
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={product.title}
              width={300}
              height={200}
              className="overflow-hidden"
            />
          ))}
        </div>
        <div className="w-full px-2 pt-7">
          <h2 className="text-[30px] font-semibold">{product.title}</h2>
          <p className="pt-5">{product.description}</p>
          <p className="pt-2">Price: ${product.price}</p>
          <div className="pt-6 flex justify-between">
            <button className="bg-green text-white text-[14px] px-3 sm:px-4 py-3 sm:py-4">
              Add to Cart
            </button>
            <Link href="/products">
              <button className="bg-[#E64848] text-white text-[14px] px-3 sm:px-4 py-3 sm:py-4">
                {"<"} Back to Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCardPage;
