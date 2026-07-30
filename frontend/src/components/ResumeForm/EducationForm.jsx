const emptyEntry = { institution: "", degree: "", startYear: "", endYear: "" };

const EducationForm = ({ data, onChange }) => {
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
      <h3>Education</h3>
      {list.map((entry, index) => (
        <div className="form-entry" key={index}>
          <input
            placeholder="Institution"
            value={entry.institution}
            onChange={(e) => updateEntry(index, "institution", e.target.value)}
          />
          <input
            placeholder="Degree"
            value={entry.degree}
            onChange={(e) => updateEntry(index, "degree", e.target.value)}
          />
          <input
            placeholder="Start Year"
            value={entry.startYear}
            onChange={(e) => updateEntry(index, "startYear", e.target.value)}
          />
          <input
            placeholder="End Year"
            value={entry.endYear}
            onChange={(e) => updateEntry(index, "endYear", e.target.value)}
          />
          <button type="button" className="btn-remove" onClick={() => removeEntry(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="btn-add" onClick={addEntry}>
        + Add Education
      </button>
    </div>
  );
};

export default EducationForm;
