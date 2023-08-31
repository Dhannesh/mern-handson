import asyncHandler from "express-async-handler";
import Job from "../models/jobSchema.js";
import User from "../models/userSchema.js";

export const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ user: req.user.id });
  res.status(200).send(jobs);
});

export const setJobs = asyncHandler(async (req, res) => {
  if (!req.body.jobText) {
    throw new Error("data is not provided");
  }
  const text = req.body.jobText;
  const job = await Job.create({ jobText: text, user: req.user.id });
  res.status(200).send(job);
});

export const updateJob = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    // throw new Error("Id is not found");
    return res.status(400).send({ message: `Job not found ${req.params.id}` });
  }
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(400);
    throw new Error("Job id not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (job.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).send(updatedJob);
});

export const deleteJob = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw new Error("Id is not found");
  }
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(400);
    throw new Error("Job id not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (job.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await job.deleteOne();
  res.status(200).send({ message: `${req.params.id} is deleted` });
});
