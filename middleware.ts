import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
// console.log("MIDDLEWARE SECRET:", process.env.JWT_SECRET);

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;
  const path = req.nextUrl.pathname;

  // All protected routes
  const isProtected =
    path.startsWith("/expense") ||
    path.startsWith("/api/plan");

console.log("MIDDLEWARE TOKEN RAW:", token);

  // If NOT protected → allow
  if (!isProtected) {
    return NextResponse.next();
  }

  // If PROTECTED but NO TOKEN → block
  if (!token) {
    console.log("NO TOKEN → redirect to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Validate JWT
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);

    console.log("TOKEN VALID");
    return NextResponse.next();
  } catch (err) {
    console.log("INVALID TOKEN → redirect");
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/expense/:path*", "/api/plan/:path*"],
  runtime:"nodejs",
};
