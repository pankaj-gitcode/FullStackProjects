import express, { Router } from "express";
import fs from 'fs'
import path from "path";
import { addFood } from "../controllers/foodController.js";

const foodRequester = express.Router();

foodRequester.use('/add', addFood);  //from assFood this route will get the Image on endpoint '/add'

export default foodRequester;  //export to main file where the HTTP 1st hit is server.js 