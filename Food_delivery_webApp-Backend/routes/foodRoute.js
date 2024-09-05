import express from 'express'
import fs from 'fs'
import path from 'path'
import multer from 'multer';
import { addFood } from '../controllers/foodController.js';

const foodRequester = express.Router();

//multer to upload image and related details
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb)=>{
        cb(null, Date.now()+ path.extname(file.originalname))
    }
})
// storage to store the uploded files
const upload = multer({
    storage:storage
}).single("image")


//create a route to navigate addFood 
foodRequester.post('/add', upload ,addFood);

//export food routes 
export default foodRequester;