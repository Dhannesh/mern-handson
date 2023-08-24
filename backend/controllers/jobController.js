import asyncHandler from "express-async-handler";

export const getJobs = asyncHandler(async (req, res) => {
  res.status(200).send({ message: "Job will show" });
});

export const setJobs = asyncHandler(async (req, res) => {
  if (!req.body.jobText) {
    throw new Error("data is not provided");
  }
  const jobText = req.body.jobText;
  res.status(200).send({ message: `${jobText} created` });
});

export const updateJob = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    // throw new Error("Id is not found");
    return res.status(400).send({ message: `Job not found ${req.params.id}` });
  }
  res.status(200).send({ message: `Job will update ${req.params.id}` });
});

export const deleteJob = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw new Error("Id is not found");
  }
  res.status(200).send({ message: `Job will delete ${req.params.id}` });
});
