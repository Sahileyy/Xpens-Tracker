'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Homebtn(){
const router = useRouter()

    const handleHome =()=>{
        const id = localStorage.getItem("user_id")

       
        console.log(id);
        

        if(!id){
            router.push('/login')
            return;
        }
        router.push(`/expense/${id}`)


    }
    

    return(
        <div className="flex flex-col">
           
            <button
            className="p-2 bg-black text-md font-bold text-white hover:bg-gray-800 rounded-md"
            onClick={handleHome}>Home</button>
           
            
        </div>
    )
}