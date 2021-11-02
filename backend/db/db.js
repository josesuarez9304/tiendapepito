import mongoose from "mongoose";

const dbConnection = async () =>{
    try{
        await mongoose.connect(process.env.DB_CONNECTION,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection with MongoDB: ok");
    }catch(error){
        console.log("Error connecting to MongoDb: \n"+error);
    }
};

export default {dbConnection};