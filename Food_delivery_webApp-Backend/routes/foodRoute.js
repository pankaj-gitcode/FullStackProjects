import express from 'express'
import fs from 'fs'
import path from 'path'

import { addFood, listFood, removeFoodItem } from '../controllers/foodController.js';
import multer from 'multer';

const foodRequester = express.Router();

// const uploadFile = ()=>{
//     try{
//         //multer to upload image and related details
//         const storage = multer.diskStorage({
//             destination: './uploads',
//             filename: (req, file, cb)=>{
//                 cb(null, file.fieldname+"-"+Date.now()+path.extname(file.originalname))
//             }
//         })
        
//         // storage to store the uploded files
//         const upload = multer({
//             storage:storage
//         }).single("image") //'image' used as req variable in foodController

//         return upload;
//     }
//     catch(err){
//         console.error(`ERROR:MULTER: ${err.message}`);
//         resizeBy.status(404).json({msg: `ERROR-MULTER: ${err.message}`})
//     }
// }
//multer to upload image and related details
const storage = multer.diskStorage({
            destination: './uploads',
            filename: (req, file, cb)=>{
                cb(null, file.originalname+"-"+Date.now()+path.extname(file.originalname));
            }
            
        })

// storage to store the uploded files
const upload = multer({
    storage:storage
})

//create a route to navigate addFood 
foodRequester.post('/add', upload.single("image") ,addFood);
foodRequester.get('/list', listFood);
foodRequester.post('/deleteFoodItems', removeFoodItem)

//export food routes 
export default foodRequester;

