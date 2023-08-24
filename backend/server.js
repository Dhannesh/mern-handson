import express from "express";
import dotenv from "dotenv";
import router from "./routes/jobRoutes.js";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use("/api/jobs", router);

app.listen(port, () => console.log(`Server is ready at ${port} port`));
