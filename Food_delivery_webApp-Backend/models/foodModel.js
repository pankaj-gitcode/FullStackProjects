import mongoose from 'mongoose'

//create food schema
const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:String, required: true},
    category: {type:String, required:true}
});

//create models
const foodModel = mongoose.model('food', foodSchema);

export default foodModel;