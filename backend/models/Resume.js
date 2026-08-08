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

const certificationSchema = new mongoose.Schema(
  {
    name: String,
    issuer: String,
    year: String,
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    techStack: String, // comma separated, kept simple like skills
    link: String,
  },
  { _id: false }
);

// e.g. { category: "Programming Languages", items: ["C", "C++", "Python"] }
const skillCategorySchema = new mongoose.Schema(
  {
    category: String,
    items: [String],
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
      linkedin: String,
      github: String,
      summary: String,
    },
    education: [educationSchema],
    experience: [experienceSchema],
    projects: [projectSchema],
    skills: [skillCategorySchema],
    certifications: [certificationSchema],
    template: {
      type: String,
      enum: ["classic", "modern-ats", "minimal-ats"],
      default: "minimal-ats",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);
