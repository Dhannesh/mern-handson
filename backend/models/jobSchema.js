import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    jobText: {
      type: String,
      required: [true, "Please add job details"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
