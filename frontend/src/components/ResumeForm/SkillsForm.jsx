const SkillsForm = ({ data, onChange }) => {
  const handleChange = (e) => {
    const skills = e.target.value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    onChange(skills);
  };

  return (
    <div className="form-section">
      <h3>Skills</h3>
      <input
        placeholder="e.g. JavaScript, Node.js, MongoDB, React"
        defaultValue={data.join(", ")}
        onChange={handleChange}
      />
      <small>Separate skills with commas</small>
    </div>
  );
};

export default SkillsForm;
