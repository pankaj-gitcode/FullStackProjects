import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';

const app = express();
const userRouter = express.Router();


//login & register routes
app.post('/login', loginUser);
app.post('/register', registerUser);

export default userRouter;