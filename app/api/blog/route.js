import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getAllPosts, createPost } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts({ includeDrafts: true });
  return NextResponse.json(posts);
}

export async function POST(request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const data = await request.json();
  if (!data.title || !data.slug || !data.content) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const post = createPost(data);
  return NextResponse.json(post, { status: 201 });
}
