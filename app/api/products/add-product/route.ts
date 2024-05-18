import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { id } = await request.json();

  try {
    if (!id)
    throw new Error("Product ID required");
    await sql`INSERT INTO products (product_id, product_count) VALUES (${id}, 1);`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;
  return NextResponse.json({ products }, { status: 200 });
}
