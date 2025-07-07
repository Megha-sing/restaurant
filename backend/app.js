import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware} from "./middlewares/error.js";


const app = express();
dotenv.config({ path: "./config/config.env" });

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"];
app.use(cors({
  origin: 'https://restaurant-fd.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true // if you use cookies or HTTP authentication
}));
//app.use(cors()); 

app.use(express.json()); //convert string to json
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Backend is running');
});
app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
