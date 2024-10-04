import express from 'express'
import userMiddleware from '../middlewares/auth.js';
import placeOrder from '../controllers/orderController.js';

const orderRouter = express.Router();


// create route
orderRouter.post('/order', userMiddleware, placeOrder);

// export
export default orderRouter;