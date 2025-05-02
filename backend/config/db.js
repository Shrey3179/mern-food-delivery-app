import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/food-app-delivery').then(()=>{
       console.log('DB connected') ;
    })
}