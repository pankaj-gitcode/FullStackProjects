import userModel from "../models/userModel.js"

// ------------- add food items to cart -----------

const addToCart = async (req, res)=>{
   const userId = req.body.userId; // from middleware:auth.js decoded user-ID
   const itemId = req.body.itemId; // from .../api/food/list

   try{
      // compare the middlware decoded user-ID with the actual user data 'user-ID' in mongoDB
      const userData = await userModel.findOne({_id:userId});
   
      // in this specfic userData we've cart data
      let cartData = userData.cartData;
   
      // check if any entry in the CartData, add count if empty=>set to 1, if no=>increment to 1
      if(!cartData[itemId]) { return cartData[itemId] = 1 }
      cartData[itemId] += 1;
      // return (!cartData[itemId])? cartData[itemId] = 1: cartData[itemData] += 1;

      // get the particular user ID and update the cart data
      await userModel.findByIdandUpdate(userId, {cartData});

      res.status(200).json({message:true, data:`'${itemId}' has been added successfully`})

   }
   catch(err){ console.error("ERROR-CartController: ", err.message); res.status(404).json({message:false, data:`ERROR-CartController: ${err.message}`}) }
} 

// ------------ remove food Items from cart ----------

const removeFromCart = async(req, res)=>{
   try{
      const userId = req.body.userId;
      const itemId = req.body.itemId;

      // compare the middleware particular userID with the actual itemId
      const userData = await userModel.findById(userId)
      
      // grab the cart data
      const cartData = userData.cartData;

      // descrease the itemId count for non-empty cartData
      if(cartData[itemId]>0) { cartData[itemId] -= 1; }

      // update the DB finding the userId and update the cartData
      await userModel.findByIdAndUpdate(userId, {cartData});

      res.status(200).json({success:true, cartData});
   }
   catch(err){
      console.error("ERROR-RemoveFromCart: ", err.message);
      res.status(404).json({
         success:false,
         data: `ERROR-RemoveFromCart: ${err.message}`
      })
   }
}

// ----------- list/get all food items from the cart ----------

const getFromCart = (req, res)=>{}

// export 
export {addToCart, removeFromCart, getFromCart}