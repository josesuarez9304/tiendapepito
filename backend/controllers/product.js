import product from "../models/product.js";
//llega de la vista request y el response es lo q sta fuyncion va a devolver
//el response dice q va devovler
const registerProduct = async (req, res) => {
    //necesita saber si alguno es vacio o el nombre o la descrpcion como atributos vienene en el json
    if (!req.body.name||!req.body.precio||!req.body.stock || !req.body.description) 
      //400 hay un error algo salio mal no llegaron alguno de los datos
      return res.status(400).send("Incomplete data");
    
  
  
  //si vienen datos priemro validamos sino existe un rol
  //va a busca por 1 solo campo q se llama nombre
  //es como si estuviera en el compas o mongo llama metodos de alla 
  //mongoose es mongo en backend
  // el esta buscando en la tabla o coleccion rol en el atributo name el que le llego de la vista  
   //el wait ba dodne hcieamos algo de una respuestas que fuera hacer algo
  //el sale de nuestra margen a buscar si mongo esta o no esta  y el espera
  //hace una query  haber si esta 
  const existingProduct = await product.findOne({name: req.body.name});
  //si ya existe manda el error
    if (existingProduct) return res.status(400).send("The product already exist");
   
    //sino exite crea el esquema 
    const productSchema = new product({
        name: req.body.name,
        precio: req.body.precio,
        stock: req.body.stock,
        description: req.body.description,
        
       
    })
  
    //y despuesva y lo va a guardar a otro lado 
    //coloco el await para que pueda hacerlo
  //el commit tiene todo listo le confirmo con el push
    const result = await productSchema.save();
    //si eso esta vacio osea con signod e admiracion 
     if(!result) return res.status(400).send("Failed to register product");
     
     
     return res.status(200).send({result});
  
  };
  
  //con este deja publico 
  //no hay geter and setter 
  //si es una funcion si lleva llaves
  export default {registerProduct};
