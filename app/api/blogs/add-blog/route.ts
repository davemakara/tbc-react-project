import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description, paragraph1, paragraph2, paragraph3, photo } =
      await request.json();

    await sql`
    INSERT INTO blogs (
      title, description, paragraph1, paragraph2, paragraph3, photo
    ) VALUES (
      ${title}, ${description}, ${paragraph1}, ${paragraph2}, ${paragraph3}, ${photo})
    `;

    const blogs = await sql`SELECT * FROM blogs;`;

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
