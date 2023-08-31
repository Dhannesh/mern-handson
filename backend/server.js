import express from "express";
import dotenv from "dotenv";
import router from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 3000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/jobs", router);
app.use("/api/users", userRoutes);
app.use(errorHandler);
app.listen(port, () => console.log(`Server is ready at ${port} port`));
