import express from "express";
import {
  getJobs,
  setJobs,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.route("/").get(getJobs).post(setJobs);
// router.get("/", getJobs);

// router.post("/", setJobs);

router.route("/:id").put(updateJob).delete(deleteJob);

// router.put("/:id", updateJob);

// router.delete("/:id", deleteJob);

export default router;
