import foodModel from "../models/foodModel.js";

//add foodItems detail
const addFood = async (req, res)=>{
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.file.imegeFile
    })

    try{
        await food.save();
        res.status(200).json({msg: `${food.name} has been added successfully!`})
    }
    catch(err){
        console.error("Error in /foodController/addFood",err.message);
        res.status(404).json({msg: `ERROR:/foodController: ${err.message}`})
    }
}

//export to routes
export{addFood}; 