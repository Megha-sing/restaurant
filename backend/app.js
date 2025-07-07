import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware} from "./middlewares/error.js";


const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL, 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
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
