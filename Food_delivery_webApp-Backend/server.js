import express from 'express'
import cors from 'cors'
import { connectToDB } from './config/db.js';
import foodRequester from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"

const app = express();

const PORT = 3000;

//Connect to MongoDB
connectToDB();

//middleware
app.use(express.json());
app.use(cors());

//API endpoint: for router: foodRequester
app.use('/api/food', foodRequester);

//API endpoint: to view particular file:here upload
app.use('/images', express.static('./uploads'));

//API endpoint: userRouter
app.use('/api/user', userRouter);


app.get('/', (req,res)=>{
    res.status(200).json({msg: "WORKING..."})
})

app.listen(PORT, (req, res)=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})

