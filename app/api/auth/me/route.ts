import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  const token = req.headers.get("cookie")
    ?.split("; ")
    .find((c) => c.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    return NextResponse.json({ loggedIn: false });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json({ loggedIn: true, id: decoded.user_id });
  } catch (err) {
    return NextResponse.json({ loggedIn: false });
  }
}
