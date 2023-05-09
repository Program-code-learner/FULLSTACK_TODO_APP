import mongoose from "mongoose";

export const connectDB = ()=>{ 
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi",
}).then((c)=>console.log(`mongo DataBase connected with ${c.connection.host}`))
.catch((e)=> console.log(e));
}
