
import mongoose,{Model, Schema,models}from "mongoose";


interface user {
    name:string,
    email:string,
    password:string

}

const UserSchema = new Schema<user> ({
    name:{
        type:String,
        required:true,
        minlength:4
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
},{timestamps:true}


);
const User =  (models.User as Model<user>) || mongoose.model<user>("User",UserSchema);

export default User