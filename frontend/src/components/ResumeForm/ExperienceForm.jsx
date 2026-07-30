const emptyEntry = { company: "", role: "", startDate: "", endDate: "", description: "" };

const ExperienceForm = ({ data, onChange }) => {
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
      <h3>Experience</h3>
      {list.map((entry, index) => (
        <div className="form-entry" key={index}>
          <input
            placeholder="Company"
            value={entry.company}
            onChange={(e) => updateEntry(index, "company", e.target.value)}
          />
          <input
            placeholder="Role"
            value={entry.role}
            onChange={(e) => updateEntry(index, "role", e.target.value)}
          />
          <input
            placeholder="Start Date"
            value={entry.startDate}
            onChange={(e) => updateEntry(index, "startDate", e.target.value)}
          />
          <input
            placeholder="End Date"
            value={entry.endDate}
            onChange={(e) => updateEntry(index, "endDate", e.target.value)}
          />
          <textarea
            placeholder="Describe your work (use bullet points)"
            value={entry.description}
            onChange={(e) => updateEntry(index, "description", e.target.value)}
            rows={3}
          />
          <button type="button" className="btn-remove" onClick={() => removeEntry(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="btn-add" onClick={addEntry}>
        + Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
