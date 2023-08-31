import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    jobText: {
      type: String,
      required: [true, "Please add job details"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
