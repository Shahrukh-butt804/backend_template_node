import mongoose from "mongoose";

export const connectDb = async() =>{
    try {
       const connectionInstance = await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: process.env.MONGODB_NAME
        });
        return connectionInstance.connection.host;
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}