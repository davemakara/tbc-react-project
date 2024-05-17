import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const { id, count } = await request.json();

  try {
    if (!id) {
      throw new Error("Product not found");
    }

    await sql`UPDATE products SET product_count = ${count} WHERE product_id = ${Number(
      id
    )};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;
  return NextResponse.json({ products }, { status: 200 });
}
