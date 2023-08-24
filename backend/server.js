import express from "express";
import dotenv from "dotenv";
import router from "./routes/jobRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/jobs", router);
app.use(errorHandler);
app.listen(port, () => console.log(`Server is ready at ${port} port`));
