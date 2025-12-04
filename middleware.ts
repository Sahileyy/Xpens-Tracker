import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  const protectedRoutes = ["/expense", "/api/plans", "/api/expenses"];
  const isProtected = protectedRoutes.some((r) => path.startsWith(r));

  console.log(isProtected);
  

  if (isProtected) return NextResponse.next();

  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/expense/:path*", "/api/plans/:path*", "/api/expenses/:path*"],
};
