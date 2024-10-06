import Stripe from "stripe";
import userModel from "../models/userModel"

const stripe = Stripe(process.env.SECRET_KEY);
const URL = 'http://localhost:5173';

// create place order function having payment gateway link
const placeOrder = async(req, res)=>{
    try{
        // create DB
        const newOrder = await userModel.create({
            userId: req.body.userId,
            itemId: req.body.itemId,
            address: req.body.address,
            amount: req.body.amount
        })

        // clean the cart 
        await userModel.findByIdAndUpdate(req.nody.userId, {cartData:{}});

        //create a line_items [as per Stripe official docs]
        const line_items = req.body.items.map(item=>{
            line_items:[{
                price_data:{
                    currency: 'inr',
                    product_data: {name:item.name},
                    unit_amount: item.price*80
                },
                quantity: item.quantity
            }]
        })

        // add delivery charges after each items
        line_items.push({
            line_items:[{
                price_data:{
                    product_data:{name:'Delivery charges'},
                    unit_amount: 2*80
                }, quantity:1
            }]
        })

        // create Stripe payment chekout session
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode:'payment',
            succes_url: `${URL}/verify?success=true&orderId=${newOrder._id}`,
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