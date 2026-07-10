import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { signToken } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Contraseña incorrecta." }, { status: 401 });
  }

  const token = await signToken();
  cookies().set("admin_token", token, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 86_400,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  return NextResponse.json({ ok: true });
}