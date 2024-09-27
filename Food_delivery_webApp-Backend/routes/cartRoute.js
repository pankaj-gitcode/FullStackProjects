import express from 'express'
import { addToCart, getFromCart, removeFromCart } from '../controllers/cartController.js';
import userMiddleware from '../middlewares/auth.js';
// import { useImperativeHandle } from 'react';

const cartRouter = express.Router();

// add foodItems to cart

cartRouter.post('/add', userMiddleware ,addToCart);

// remove foodItems from the cart
cartRouter.post('/remove',userMiddleware ,removeFromCart);

// get all food items from cart
cartRouter.get('/get', userMiddleware ,getFromCart);

export default cartRouter;