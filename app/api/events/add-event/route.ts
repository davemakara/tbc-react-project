import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, photo, artist, description, venue, date } =
      await request.json();

    await sql`
    INSERT INTO events (
      title, photo, artist, description, venue, date
    ) VALUES (
      ${title}, ${photo}, ${artist}, ${description}, ${venue}, ${date})
    `;

    const events = await sql`SELECT * FROM events;`;

    return NextResponse.json({ events }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
