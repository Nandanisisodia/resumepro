import html2pdf from "html2pdf.js";

// Takes the DOM element id of the resume preview and turns it into
// a downloadable PDF, entirely in the browser - no server round trip.
export const downloadResumeAsPDF = (elementId, fileName = "resume.pdf") => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const options = {
    margin: 0.4,
    filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(element).save();
};
