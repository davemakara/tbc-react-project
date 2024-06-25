import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/cart/reset-cart/", "");

  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM cart WHERE auth_id = ${id}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM cart;`;

  return NextResponse.json({ products }, { status: 200 });
}
