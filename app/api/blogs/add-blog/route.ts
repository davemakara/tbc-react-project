import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description, blogpost, photo } = await request.json();

    await sql`
    INSERT INTO blogs (
      title, description, blogpost, photo
    ) VALUES (
      ${title}, ${description}, ${blogpost}, ${photo})
    `;

    const blogs = await sql`SELECT * FROM blogs;`;

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
