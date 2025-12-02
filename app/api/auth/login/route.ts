import bcrypt from "bcryptjs";
import User from "@/models/userModel";
import { connectDB } from "@/lib/mongoConnect";
import { generateToken } from "@/lib/jwt/generateToken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import path from "path";

export async function POST(req:Request) {

    try{
        await connectDB();
         const {email,password} =await req.json()

         if(!email||!password){
            return NextResponse.json({error:"All Feilds are Required"})
         }

         const user = await User.findOne({email});

         if(!user){
            return NextResponse.json({error:"Login Adress Failed"})
         }
         const isMatched =  await bcrypt.compare(password,user.password);
         if(!isMatched){
            return NextResponse.json({error:"Incorrect Password"})
         }

         const token = generateToken(user._id.toString());

         


         const response = NextResponse.json(
            {
                message:"LOGIN SUCCESSFULL",
                token,
                user:{
                    id:user._id,
                    name:user.name,
                    email:user.email
                }
            },{status:201}
         )
         response.cookies.set("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"strict",
            maxAge:7*24*60*60,
            path:"/",
         })
         return response;
    }catch(err){
        console.log(err,"from login catch");
        return NextResponse.json({error:"login Failed Please try again!"})
        
    }
    
}