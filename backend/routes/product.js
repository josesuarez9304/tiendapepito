//importa express
import express from "express";
import product from "../controllers/product.js";
const router =express.Router()

//http://localhost:3001/api/role/registerRole
router.post("/registerProduct",product.registerProduct);

// no lleva llaves por q no es funcion
export default  router