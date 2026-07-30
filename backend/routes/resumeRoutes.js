const express = require("express");
const {
  getResumes,
  getResumeById,
  createResume,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// every resume route requires a logged in user
router.use(protect);

router.route("/").get(getResumes).post(createResume);

router.route("/:id").get(getResumeById).put(updateResume).delete(deleteResume);

module.exports = router;
