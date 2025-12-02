import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function middleware(req:NextRequest){
    try{

        const protectedPaths = ["/api/expense"];
        const url = req.nextUrl.pathname;
        const isProtected = protectedPaths.some((path)=> url.startsWith(path))
    }
}
