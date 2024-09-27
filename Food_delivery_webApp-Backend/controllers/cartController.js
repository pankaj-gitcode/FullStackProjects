import userModel from "../models/userModel.js"

// ------------- add food items to cart -----------

const addToCart = async (req, res)=>{
   const userId = req.body.userId; // from .../api/user/login
   const itemId = req.body.itemId; // from .../api/food/list

   try{
      // Sign-In the specific user account
      const userData = await userModel.findOne({userId});
   
      // in this userData we've cart data
      let cartData = userData.cartData;
   
      // check if any entry in the CartData, empty=>set to 1, no=>increment to 1
      if(!cartData[itemId]) { return cartData[itemId] = 1 }
      cartData[itemId] += 1;

      // update the cartData with the above added itemID
      await userModel.findByIdandUpdate(userId, {userId});

      res.status(200).json({message:true, data:`'${itemId}' has added successfully`})

   }
   catch(err){ console.error("ERROR-CartController: ", err.message); res.status(404).json({message:false, data:`ERROR-CartController: ${err.message}`}) }
} 

// ------------ remove food Items form cart ----------

const removeFromCart = (req, res)=>{}

// ----------- list/get all food items from the cart ----------

const getFromCart = (req, res)=>{}

// export 
export {addToCart, removeFromCart, getFromCart}