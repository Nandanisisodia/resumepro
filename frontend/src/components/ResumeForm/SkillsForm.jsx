const emptyCategory = { category: "", items: [] };

// data shape: [{ category: "Programming Languages", items: ["C", "C++", "Python"] }, ...]
const SkillsForm = ({ data, onChange }) => {
  const list = data.length ? data : [];

  const updateCategory = (index, field, value) => {
    const updated = [...list];
    if (field === "items") {
      updated[index] = {
        ...updated[index],
        items: value
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    onChange(updated);
  };

  const addCategory = () => onChange([...list, { ...emptyCategory }]);
  const removeCategory = (index) => onChange(list.filter((_, i) => i !== index));

  return (
    <div className="form-section">
      <h3>Skills</h3>
      {list.map((entry, index) => (
        <div className="form-entry" key={index}>
          <input
            placeholder="Category (e.g. Programming Languages)"
            value={entry.category}
            onChange={(e) => updateCategory(index, "category", e.target.value)}
          />
          <input
            placeholder="Skills, comma separated (e.g. C, C++, Python)"
            defaultValue={entry.items.join(", ")}
            onChange={(e) => updateCategory(index, "items", e.target.value)}
          />
          <button type="button" className="btn-remove" onClick={() => removeCategory(index)}>
            Remove Category
          </button>
        </div>
      ))}
      <button type="button" className="btn-add" onClick={addCategory}>
        + Add Skill Category
      </button>
    </div>
  );
};

export default SkillsForm;
