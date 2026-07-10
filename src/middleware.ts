import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/admin-auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") {
    const res = NextResponse.next();
    res.headers.set("x-is-admin", "1");
    return res;
  }

  const token = req.cookies.get("admin_token")?.value;
  if (!token || !(await verifyToken(token))) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const res = NextResponse.next();
  res.headers.set("x-is-admin", "1");
  return res;
}

export const config = { matcher: ["/admin/:path*"] };