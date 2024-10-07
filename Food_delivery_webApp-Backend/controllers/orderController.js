import Stripe from "stripe";
import userModel from "../models/userModel.js"
import orderModel from "../models/orderModel.js";

const stripe = Stripe(process.env.SECRET_KEY);
const URL = 'http://localhost:5173';

// create place order function having payment gateway link
const placeOrder = async(req, res)=>{
    try{
        console.log("isArray: ", req.body.items)
        // create DB
        const newOrder = await orderModel.create({
            userId: req.body.userId,
            address: req.body.address,
            items: req.body.items,
            amount: req.body.amount
        })

        // clean the cart 
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}});

        //create a line_items [as per Stripe official docs]
        const line_items = req.body.items.map(item=>({
            
                price_data:{
                    currency: 'inr',
                    product_data: {name:item.name},
                    unit_amount: item.price*100*80
                },
                quantity: item.quantity
            
        }))

        // add delivery charges after each items
        line_items.push({
            
                price_data:{
                    currency: 'inr',
                    product_data:{name:'Delivery Charges'},
                    unit_amount: 2*100*80
                }, quantity:1
            
        })

        // create Stripe payment chekout session
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode:'payment',
            success_url: `${URL}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${URL}/verify?sucess=false&orderId=${newOrder._id}`
        })

        res.status(200).json({
            success:true,
            session_url: session.url
        })

    }
    catch(err){
        res.status(404).json({
            success: false,
            message: `ERROR-OrderController: ${err.message}`
        })
    }
}

// export the placeorder
export default placeOrder