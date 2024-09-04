import express from 'express'
import cors from 'cors'
import { connectToDB } from './config/db.js';
import foodRequester from './routes/foodRoute.js';
const app = express();

const PORT = 3000;

//Connect to MongoDB
connectToDB();

//API endpoint for routeer: foodRequester
app.use('/api/food', foodRequester);

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.status(200).json({msg: "WORKING..."})
})

app.listen(PORT, (req, res)=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})