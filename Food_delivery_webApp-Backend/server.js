import express from 'express'
import cors from 'cors'
import { connectToDB } from './config/db.js';
import foodRequester from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();

const PORT = 3000;

//Connect to MongoDB
connectToDB();

//middleware
app.use(express.json());
app.use(cors());

// --------------- API ENDPOINT ----------
// food item
app.use('/api/food', foodRequester);

// to view particular file:here upload
app.use('/images', express.static('./uploads'));

// user Router
app.use('/api/user', userRouter);

// cart router
app.use('/api/cart', cartRouter);

// order router
app.use('/api/place', orderRouter);

// just to check - not needed!
app.get('/', (req,res)=>{
    res.status(200).json({msg: "WORKING..."})
})

app.listen(PORT, (req, res)=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})

