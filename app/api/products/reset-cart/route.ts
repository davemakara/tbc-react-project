import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function DELETE() {
  try {
    await sql`DELETE FROM products;`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM products;`;
  return NextResponse.json({ products }, { status: 200 });
}
