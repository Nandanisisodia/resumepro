import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getResumeById, updateResume } from "../services/resumeService";
import PersonalInfoForm from "../components/ResumeForm/PersonalInfoForm";
import EducationForm from "../components/ResumeForm/EducationForm";
import ExperienceForm from "../components/ResumeForm/ExperienceForm";
import ProjectsForm from "../components/ResumeForm/ProjectsForm";
import SkillsForm from "../components/ResumeForm/SkillsForm";
import CertificationsForm from "../components/ResumeForm/CertificationsForm";
import TemplateClassic from "../components/ResumePreview/TemplateClassic";
import TemplateMinimalATS from "../components/ResumePreview/TemplateMinimalATS";
import TemplateModernATS from "../components/ResumePreview/TemplateModernATS";
import { downloadResumeAsPDF } from "../utils/downloadPDF";
import { downloadATSResumeAsPDF } from "../utils/generateATSPdf";

// Maps a template id to its preview component. Add new templates here.
const TEMPLATES = {
  "minimal-ats": { label: "Minimal (ATS-safe)", Component: TemplateMinimalATS, isATS: true },
  "modern-ats": { label: "Modern (ATS-safe)", Component: TemplateModernATS, isATS: true },
  classic: { label: "Classic (styled, not ATS-optimized)", Component: TemplateClassic, isATS: false },
};

const Builder = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null); // { type: "success" | "error", text }

  useEffect(() => {
    getResumeById(id).then(setResume);
  }, [id]);

  // Generic updater for any top-level field (personalInfo, education, etc.)
  const updateField = useCallback((field, value) => {
    setResume((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage(null);
    try {
      const updated = await updateResume(id, resume);
      setResume(updated);
      setSaveMessage({ type: "success", text: "Saved" });
    } catch (error) {
      setSaveMessage({
        type: "error",
        text: error.response?.data?.message || "Could not save, try again",
      });
    } finally {
      setSaving(false);
      // clear the message after a few seconds so it doesn't linger forever
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  const handleDownload = () => {
    const fileName = `${resume.personalInfo?.fullName || "resume"}.pdf`;
    const activeTemplate = TEMPLATES[resume.template] || TEMPLATES["minimal-ats"];

    if (activeTemplate.isATS) {
      // Real selectable text - safe for ATS parsers
      downloadATSResumeAsPDF(resume, fileName);
    } else {
      // Visual snapshot export - looks exactly like the preview, but is an image
      downloadResumeAsPDF("resume-preview", fileName);
    }
  };

  if (!resume) return <p className="page-loader">Loading resume...</p>;

  const ActiveTemplate = (TEMPLATES[resume.template] || TEMPLATES["minimal-ats"]).Component;

  return (
    <div className="builder">
      <div className="builder-form">
        <div className="builder-actions">
          <button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </button>
          <button onClick={handleDownload} className="btn-secondary">
            Download PDF
          </button>
          {saveMessage && (
            <span className={`save-status save-status-${saveMessage.type}`}>
              {saveMessage.text}
            </span>
          )}
        </div>

        <div className="form-section template-select">
          <label htmlFor="template">Template</label>
          <select
            id="template"
            value={resume.template || "minimal-ats"}
            onChange={(e) => updateField("template", e.target.value)}
          >
            {Object.entries(TEMPLATES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <PersonalInfoForm
          data={resume.personalInfo || {}}
          onChange={(value) => updateField("personalInfo", value)}
        />
        <ExperienceForm
          data={resume.experience || []}
          onChange={(value) => updateField("experience", value)}
        />
        <ProjectsForm
          data={resume.projects || []}
          onChange={(value) => updateField("projects", value)}
        />
        <EducationForm
          data={resume.education || []}
          onChange={(value) => updateField("education", value)}
        />
        <CertificationsForm
          data={resume.certifications || []}
          onChange={(value) => updateField("certifications", value)}
        />
        <SkillsForm
          data={resume.skills || []}
          onChange={(value) => updateField("skills", value)}
        />
      </div>

      <div className="builder-preview">
        <ActiveTemplate resume={resume} />
      </div>
    </div>
  );
};

export default Builder;
