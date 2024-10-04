


// create place order function having paymentgate way link
const placeOrder = async(req, res)=>{
    try{}
    catch(err){
        res.status(404).json({
            success: false,
            message: `ERROR-OrderController: ${err.message}`
        })
    }
}

// export the placeorder
export default placeOrder