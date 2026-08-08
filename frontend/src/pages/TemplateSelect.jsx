import { useNavigate } from "react-router-dom";
import { createResume } from "../services/resumeService";

const TEMPLATE_OPTIONS = [
  {
    id: "minimal-ats",
    name: "Minimal",
    tag: "ATS-Safe",
    description: "Clean black & white layout built for maximum ATS compatibility.",
  },
  {
    id: "modern-ats",
    name: "Modern",
    tag: "ATS-Safe",
    description: "A subtle accent color with the same ATS-safe, single-column structure.",
  },
  {
    id: "classic",
    name: "Classic",
    tag: "Styled",
    description: "A more visually designed layout, best for saving as a styled PDF.",
  },
];

const TemplateSelect = () => {
  const navigate = useNavigate();

  const handleChoose = async (templateId) => {
    const resume = await createResume({ title: "Untitled Resume", template: templateId });
    navigate(`/builder/${resume._id}`);
  };

  return (
    <div className="template-select-page">
      <div className="template-select-header">
        <h1>Choose a Resume Template</h1>
        <p>
          Select one of our expertly designed resume templates to kickstart your job
          application. You can always change your template later from the builder.
        </p>
      </div>

      <div className="template-select-grid">
        {TEMPLATE_OPTIONS.map((template) => (
          <div className="template-option-card" key={template.id}>
            <div className="template-option-preview">
              <div className="bar title" />
              <div className="bar accent" />
              <div className="bar" style={{ width: "90%" }} />
              <div className="bar" style={{ width: "75%" }} />
              <div className="bar" style={{ width: "60%", marginTop: 8 }} />
              <div className="bar" style={{ width: "85%" }} />
            </div>
            <div className="template-option-body">
              <span className="template-option-tag">{template.tag}</span>
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <button onClick={() => handleChoose(template.id)}>Use this template</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelect;
