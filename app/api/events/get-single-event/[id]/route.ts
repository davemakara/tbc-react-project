import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace(
    "/api/events/get-single-event/",
    ""
  );

  try {
    if (!id) throw new Error("ID is required");
    const singleEvent = await sql`SELECT * FROM events WHERE id = ${Number(
      id
    )}`;
    return NextResponse.json({ singleEvent }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
