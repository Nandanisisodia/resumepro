const emptyEntry = { name: "", issuer: "", year: "" };

const CertificationsForm = ({ data, onChange }) => {
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
      <h3>Certifications</h3>
      {list.map((entry, index) => (
        <div className="form-entry" key={index}>
          <input
            placeholder="Certification Name"
            value={entry.name}
            onChange={(e) => updateEntry(index, "name", e.target.value)}
          />
          <input
            placeholder="Issued By (e.g. Coursera, AWS)"
            value={entry.issuer}
            onChange={(e) => updateEntry(index, "issuer", e.target.value)}
          />
          <input
            placeholder="Year"
            value={entry.year}
            onChange={(e) => updateEntry(index, "year", e.target.value)}
          />
          <button type="button" className="btn-remove" onClick={() => removeEntry(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="btn-add" onClick={addEntry}>
        + Add Certification
      </button>
    </div>
  );
};

export default CertificationsForm;
