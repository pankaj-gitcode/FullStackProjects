import foodModel from "../models/foodModel.js";
import fs from 'fs'


// ----------------- add food items ----------------
const addFood = async(req, res)=>{
    try{
        //image file, foodItem details
        const imageFile = req.file?req.file.filename:null;
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const category = req.body.category;

        //check if foodItem already exist
        const foodExist = await foodModel.findOne({name})
        if(foodExist){
            console.log(`${name} already exist`)
            res.status(500).json({msg: `${name} already exist!`})
            return;
        }
        const createFoodItemsDetail = await foodModel.create({
            name,
            description,
            price,
            category,
            image:imageFile
        })
        res.status(200).json({
            success: true,
            data: `${name} added successfully!!`})
    }
    catch(err){
        console.error(`ERROR:/foodController: ${err.message}`);
        res.status(404).json({msg: `ERROR:/foodController: ${err.message}`})
    }
}

// ------------------ Read/List all the food items --------------
const listFood = async (req, res)=>{
   try{

    const readList = await foodModel.find({})
    res.status(200).json({success:true, data: readList})
   }
   catch(err){
    console.error(`ERROR: READ-FOOD-LIST: ${readList}`)
    res.status(404).json({data:`ERROR- READ_FOOD_LIST: ${readList}`})
   }

}

// ---------------------- Delete food Items from /upload & DB ---------------
const removeFoodItem = async(req, res)=>{
    try{
       
        const id = req.body.id;
        console.log("REQ-BODY: ",req.body)
        if(!id){ return res.status(400).json({msg: ``}) }

        // read the foodDetails from the DB
        const food = await foodModel.findById(id);
        
        //check food Items/details exists
        if(!food){return res.status(404).json({success: false, data:`${food.id} does not exist...`}) }

        // delete from the DB by ID
        await foodModel.findByIdAndDelete(id);

        // remove from the './uploads'
        fs.unlink(`uploads/${food.image}`,(err)=>{
            if(err){console.error(`ERROR-/controller/unlink: ${err.message}`)}
            console.log(`${food.image} has been successfully deleted!`)
        })

        res.status(200).json({success:true, data: `${food.image} has been deleted!`})
    }
    catch(err){
        console.error(`ERROR-DELETE-FOOD: ${err.message}`)
        res.status(404).json({
            success: false,
            data: `ERROR-DELETE-FODD /Controller: ${err.message}`
        } )
    }
}
//export to routes
export{addFood, listFood, removeFoodItem}; 

