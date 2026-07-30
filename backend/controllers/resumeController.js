const Resume = require("../models/Resume");

// @route   GET /api/resumes
// @access  Private
const getResumes = async (req, res, next) => {
  try {
    const resumes = await Resume.find({ user: req.user._id }).sort({ updatedAt: -1 });
    res.json(resumes);
  } catch (error) {
    next(error);
  }
};

// @route   GET /api/resumes/:id
// @access  Private
const getResumeById = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // make sure users can only access their own resumes
    if (resume.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to access this resume" });
    }

    res.json(resume);
  } catch (error) {
    next(error);
  }
};

// @route   POST /api/resumes
// @access  Private
const createResume = async (req, res, next) => {
  try {
    const resume = await Resume.create({
      user: req.user._id,
      title: req.body.title || "Untitled Resume",
      personalInfo: req.body.personalInfo || {},
      education: req.body.education || [],
      experience: req.body.experience || [],
      skills: req.body.skills || [],
      template: req.body.template || "classic",
    });

    res.status(201).json(resume);
  } catch (error) {
    next(error);
  }
};

// @route   PUT /api/resumes/:id
// @access  Private
const updateResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    if (resume.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this resume" });
    }

    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// @route   DELETE /api/resumes/:id
// @access  Private
const deleteResume = async (req, res, next) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    if (resume.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this resume" });
    }

    await resume.deleteOne();
    res.json({ message: "Resume deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getResumes,
  getResumeById,
  createResume,
  updateResume,
  deleteResume,
};
