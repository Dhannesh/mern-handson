import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Job will show" });
});

router.post("/", (req, res) => {
  res.status(200).send({ message: "Job will create" });
});

router.put("/:id", (req, res) => {
  res.status(200).send({ message: `Job will update ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).send({ message: `Job will delete ${req.params.id}` });
});

export default router;
