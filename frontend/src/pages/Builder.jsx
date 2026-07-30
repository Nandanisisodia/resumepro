import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getResumeById, updateResume } from "../services/resumeService";
import PersonalInfoForm from "../components/ResumeForm/PersonalInfoForm";
import EducationForm from "../components/ResumeForm/EducationForm";
import ExperienceForm from "../components/ResumeForm/ExperienceForm";
import SkillsForm from "../components/ResumeForm/SkillsForm";
import TemplateClassic from "../components/ResumePreview/TemplateClassic";
import { downloadResumeAsPDF } from "../utils/downloadPDF";

const Builder = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getResumeById(id).then(setResume);
  }, [id]);

  // Generic updater for any top-level field (personalInfo, education, etc.)
  const updateField = useCallback((field, value) => {
    setResume((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const updated = await updateResume(id, resume);
    setResume(updated);
    setSaving(false);
  };

  const handleDownload = () => {
    downloadResumeAsPDF("resume-preview", `${resume.personalInfo?.fullName || "resume"}.pdf`);
  };

  if (!resume) return <p className="page-loader">Loading resume...</p>;

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
        </div>

        <PersonalInfoForm
          data={resume.personalInfo || {}}
          onChange={(value) => updateField("personalInfo", value)}
        />
        <ExperienceForm
          data={resume.experience || []}
          onChange={(value) => updateField("experience", value)}
        />
        <EducationForm
          data={resume.education || []}
          onChange={(value) => updateField("education", value)}
        />
        <SkillsForm
          data={resume.skills || []}
          onChange={(value) => updateField("skills", value)}
        />
      </div>

      <div className="builder-preview">
        <TemplateClassic resume={resume} />
      </div>
    </div>
  );
};

export default Builder;
