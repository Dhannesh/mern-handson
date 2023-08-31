import express from "express";
import {
  getJobs,
  setJobs,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getJobs).post(protect, setJobs);
// router.get("/", getJobs);
// router.post("/", setJobs);

router.route("/:id").put(protect, updateJob).delete(protect, deleteJob);

// router.put("/:id", updateJob);
// router.delete("/:id", deleteJob);

export default router;
