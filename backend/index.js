//prueba del cambio
import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
//importo la ruta
import product from "./routes/product.js"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/product",product)

//escuhar el puerto
app.listen(process.env.PORT,() =>
console.log("Backend server running on port:"+ process.env.PORT));

db.dbConnection();