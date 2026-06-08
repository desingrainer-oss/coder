import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getPostById, updatePost, deletePost } from "@/lib/blog";

export async function GET(_request, { params }) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const data = await request.json();
  const post = updatePost(id, data);
  if (!post) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json(post);
}

export async function DELETE(_request, { params }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const ok = deletePost(id);
  if (!ok) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
