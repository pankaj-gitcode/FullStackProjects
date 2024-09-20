import express from 'express'
import { addToCart, getFromCart, removeFromCart } from '../controllers/cartController.js';

const cartRouter = express.Router();

// add foodItems to cart

cartRouter.post('/add', addToCart);

// remove foodItems from the cart
cartRouter.post('/remove', removeFromCart);

// get all food items from cart
cartRouter.post('/get', getFromCart);

export default cartRouter;