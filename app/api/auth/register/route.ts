import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/userModel";
import { connectDB } from "@/lib/mongoConnect";



export  async function POST(req:Request,res:Response) {
    // console.log("reachedd");
    // const {name,email,password} =await req.json();
    //     console.log(name,email,password);

    try{
      
        
        await connectDB()

        
     
        
        const {name,email,password} =await req.json();
        console.log(name,email,password);
        

        const existingUser = await User.findOne({email})
        if (existingUser){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        const hashed = await bcrypt.hash(password, 10);
        if(!existingUser){

            const user = await User.create({
                name,
                email,
                password:hashed
            })
            return NextResponse.json(
                {message:"Registration Compeleted",
                    user:{
                        id:user._id,
                        name:user.name,
                        email:user.email
                    },
                }
            )
        }
    }
    catch(error){
        console.log(error);
        
       return NextResponse.json({error:"Registration Failed"})
        
    }
    
}