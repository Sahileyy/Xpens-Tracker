import { error } from "console";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";


export async function verifyToken(req:Request) {

    const authHeader = req.headers.get("authorization");

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return NextResponse.json(
            {error:"No token proviided"},
            {status:401}
        )
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET!) as {
            user_id:string
        };
        return decoded
    }
    catch(error){
        return NextResponse.json({error:"invalid token"},{status:401})
    }
    
}