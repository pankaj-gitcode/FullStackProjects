import foodModel from "../models/foodModel.js";

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
        res.status(200).json({msg: `${name} has been uploaded successfully!!`})
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
    res.status(200).json({data: readList})
   }
   catch(err){
    console.error(`ERROR: READ-FOOD-LIST: ${readList}`)
    res.status(404).json({data:`ERROR- READ_FOOD_LIST: ${readList}`})
   }

}

//export to routes
export{addFood, listFood}; 

