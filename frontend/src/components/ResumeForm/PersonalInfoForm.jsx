const PersonalInfoForm = ({ data, onChange }) => {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h3>Personal Info</h3>
      <input
        name="fullName"
        placeholder="Full Name"
        value={data.fullName || ""}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={data.email || ""}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={data.phone || ""}
        onChange={handleChange}
      />
      <input
        name="location"
        placeholder="Location"
        value={data.location || ""}
        onChange={handleChange}
      />
      <input
        name="linkedin"
        placeholder="LinkedIn URL (e.g. linkedin.com/in/yourname)"
        value={data.linkedin || ""}
        onChange={handleChange}
      />
      <input
        name="github"
        placeholder="GitHub URL (e.g. github.com/yourusername)"
        value={data.github || ""}
        onChange={handleChange}
      />
      <textarea
        name="summary"
        placeholder="Short professional summary"
        value={data.summary || ""}
        onChange={handleChange}
        rows={3}
      />
    </div>
  );
};

export default PersonalInfoForm;
