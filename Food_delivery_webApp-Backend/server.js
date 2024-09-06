import express from 'express'
import cors from 'cors'
import { connectToDB } from './config/db.js';
import foodRequester from './routes/foodRoute.js';
const app = express();

const PORT = 3000;

//Connect to MongoDB
connectToDB();

//middleware
app.use(express.json());
app.use(cors());

//API endpoint for routeer: foodRequester
app.use('/api/food', foodRequester);

//to view particular file:here upload
app.use('/images', express.static('./uploads'));



app.get('/', (req,res)=>{
    res.status(200).json({msg: "WORKING..."})
})

app.listen(PORT, (req, res)=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})

