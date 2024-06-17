import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { artist, price, category, stock, photo, title, description } =
      await request.json();

    await sql`
    INSERT INTO store (
      artist, price, category, stock, photo, title,
      description
    ) VALUES (
      ${artist}, ${price}, ${category}, ${stock}, ${photo}, ${title},
      ${description})
    `;

    const products = await sql`SELECT * FROM store;`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
