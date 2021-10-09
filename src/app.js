import express, { json } from "express";
import cors from "cors";
import "dotenv/config"
import "./database/index"

const app = express();

app.use(cors());
app.use(json());

export default app;