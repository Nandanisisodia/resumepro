const emptyEntry = { name: "", description: "", techStack: "", link: "" };

const ProjectsForm = ({ data, onChange }) => {
  const list = data.length ? data : [];

  const updateEntry = (index, field, value) => {
    const updated = [...list];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addEntry = () => onChange([...list, { ...emptyEntry }]);
  const removeEntry = (index) => onChange(list.filter((_, i) => i !== index));

  return (
    <div className="form-section">
      <h3>Projects</h3>
      {list.map((entry, index) => (
        <div className="form-entry" key={index}>
          <input
            placeholder="Project Name"
            value={entry.name}
            onChange={(e) => updateEntry(index, "name", e.target.value)}
          />
          <textarea
            placeholder="What does it do, what did you build"
            value={entry.description}
            onChange={(e) => updateEntry(index, "description", e.target.value)}
            rows={3}
          />
          <input
            placeholder="Tech Stack (e.g. React, Node.js, MongoDB)"
            value={entry.techStack}
            onChange={(e) => updateEntry(index, "techStack", e.target.value)}
          />
          <input
            placeholder="Link (GitHub / live demo, optional)"
            value={entry.link}
            onChange={(e) => updateEntry(index, "link", e.target.value)}
          />
          <button type="button" className="btn-remove" onClick={() => removeEntry(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="btn-add" onClick={addEntry}>
        + Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
