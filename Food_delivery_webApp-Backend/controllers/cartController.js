import userModel from "../models/userModel"

// add food items to cart

const addToCart = async (req, res)=>{
   const userID = req.body.userId
   const userId = await userModel.findOne({id: userId}) ;

} 

// remove food Items form cart

const removeFromCart = (req, res)=>{}

// list/get all food items from the cart

const getFromCart = (req, res)=>{}

// export 
export {addToCart, removeFromCart, getFromCart}