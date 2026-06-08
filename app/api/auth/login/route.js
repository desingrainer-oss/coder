import { NextResponse } from "next/server";
import { getAdminPassword, createSessionCookie } from "@/lib/auth";

export async function POST(request) {
  const { password } = await request.json();

  if (password !== getAdminPassword()) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(createSessionCookie());
  return response;
}
