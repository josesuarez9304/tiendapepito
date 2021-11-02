
import mongoose from "mongoose";

 const productSchema = new mongoose.Schema(
    //el id lo genera automaticamente 
    {
       // name: {type:String} o para primitivos name:String
       name:String,
       precio: Number,
     
       //registra la fecha  actual con el now
       registerDate: {type: Date, default: Date.now},
       stock: Number,
       description: String,

     }
 );
//arriba se creo el diagrama q va a guardar el backend y despues necesitamos
//que cree la coleccion en compas  y ese role que se creo se lleve el q tiene
 const product =  mongoose.model("product",productSchema);

 export default product