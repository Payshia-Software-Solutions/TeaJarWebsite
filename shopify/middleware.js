export const config = {
  matcher: ["/static/:path*"], // Apply middleware only to static files
};

import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Custom cache-control for assets
  if (pathname.endsWith(".mp4") || pathname.endsWith(".webp")) {
    const res = NextResponse.next();
    res.headers.set("Cache-Control", "public, max-age=31536000, immutable");
    return res;
  }

  return NextResponse.next();
}
