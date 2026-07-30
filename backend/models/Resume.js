const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    institution: String,
    degree: String,
    startYear: String,
    endYear: String,
  },
  { _id: false }
);

const experienceSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    startDate: String,
    endDate: String,
    description: String,
  },
  { _id: false }
);

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      default: "Untitled Resume",
    },
    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      location: String,
      summary: String,
    },
    education: [educationSchema],
    experience: [experienceSchema],
    skills: [String],
    template: {
      type: String,
      enum: ["classic", "modern"],
      default: "classic",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);
