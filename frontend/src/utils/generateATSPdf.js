import { jsPDF } from "jspdf";

const PAGE_WIDTH = 210; // A4 in mm
const PAGE_HEIGHT = 297;
const MARGIN = 18;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

// Writes real, selectable text into the PDF (as opposed to html2pdf's
// screenshot-style export) so ATS parsers can actually read it.
export const downloadATSResumeAsPDF = (resume, fileName = "resume.pdf") => {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    projects = [],
    skills = [],
    certifications = [],
  } = resume;

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = MARGIN;

  // Moves the cursor down, adding a fresh page if we've run out of room
  const ensureSpace = (neededHeight) => {
    if (y + neededHeight > PAGE_HEIGHT - MARGIN) {
      doc.addPage();
      y = MARGIN;
    }
  };

  const writeLine = (text, { size = 10, style = "normal", gap = 5 } = {}) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH);
    ensureSpace(lines.length * gap);
    doc.text(lines, MARGIN, y);
    y += lines.length * gap;
  };

  const writeSectionHeading = (title) => {
    y += 3;
    ensureSpace(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(title.toUpperCase(), MARGIN, y);
    y += 1.5;
    doc.setDrawColor(0, 0, 0);
    doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
    y += 5;
  };

  // --- Header ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(personalInfo.fullName || "Your Name", MARGIN, y);
  y += 7;

  const contactLine = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    personalInfo.linkedin,
    personalInfo.github,
  ]
    .filter(Boolean)
    .join("  |  ");
  if (contactLine) {
    writeLine(contactLine, { size: 10, gap: 5 });
  }

  // --- Summary ---
  if (personalInfo.summary) {
    writeSectionHeading("Summary");
    writeLine(personalInfo.summary, { size: 10, gap: 5 });
  }

  // --- Experience ---
  if (experience.length > 0) {
    writeSectionHeading("Experience");
    experience.forEach((exp) => {
      writeLine(`${exp.role || ""} - ${exp.company || ""}`, { size: 11, style: "bold", gap: 5 });
      if (exp.startDate || exp.endDate) {
        writeLine(`${exp.startDate || ""} - ${exp.endDate || "Present"}`, { size: 9, gap: 4.5 });
      }
      if (exp.description) {
        writeLine(exp.description, { size: 10, gap: 5 });
      }
      y += 2;
    });
  }

  // --- Projects ---
  if (projects.length > 0) {
    writeSectionHeading("Projects");
    projects.forEach((proj) => {
      writeLine(proj.name || "", { size: 11, style: "bold", gap: 5 });
      if (proj.description) {
        writeLine(proj.description, { size: 10, gap: 5 });
      }
      if (proj.techStack) {
        writeLine(`Tech: ${proj.techStack}`, { size: 9, gap: 4.5 });
      }
      if (proj.link) {
        writeLine(proj.link, { size: 9, gap: 4.5 });
      }
      y += 2;
    });
  }

  // --- Education ---
  if (education.length > 0) {
    writeSectionHeading("Education");
    education.forEach((edu) => {
      writeLine(`${edu.degree || ""} - ${edu.institution || ""}`, { size: 11, style: "bold", gap: 5 });
      if (edu.startYear || edu.endYear) {
        writeLine(`${edu.startYear || ""} - ${edu.endYear || ""}`, { size: 9, gap: 4.5 });
      }
      y += 2;
    });
  }

  // --- Certifications ---
  if (certifications.length > 0) {
    writeSectionHeading("Certifications");
    certifications.forEach((cert) => {
      writeLine(`${cert.name || ""} - ${cert.issuer || ""} (${cert.year || ""})`, {
        size: 10,
        gap: 5,
      });
    });
  }

  // --- Skills ---
  if (skills.length > 0) {
    writeSectionHeading("Skills");
    skills.forEach((group) => {
      writeLine(`${group.category}: ${(group.items || []).join(", ")}`, { size: 10, gap: 5 });
    });
  }

  doc.save(fileName);
};
