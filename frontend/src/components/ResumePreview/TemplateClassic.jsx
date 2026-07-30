const TemplateClassic = ({ resume }) => {
  const { personalInfo = {}, education = [], experience = [], skills = [] } = resume;

  return (
    <div className="resume-preview" id="resume-preview">
      <header className="resume-header">
        <h1>{personalInfo.fullName || "Your Name"}</h1>
        <p className="resume-contact">
          {[personalInfo.email, personalInfo.phone, personalInfo.location]
            .filter(Boolean)
            .join(" | ")}
        </p>
      </header>

      {personalInfo.summary && (
        <section>
          <h2>Summary</h2>
          <p>{personalInfo.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section>
          <h2>Experience</h2>
          {experience.map((exp, i) => (
            <div className="resume-item" key={i}>
              <div className="resume-item-header">
                <strong>{exp.role}</strong> — {exp.company}
                <span className="resume-dates">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2>Education</h2>
          {education.map((edu, i) => (
            <div className="resume-item" key={i}>
              <div className="resume-item-header">
                <strong>{edu.degree}</strong> — {edu.institution}
                <span className="resume-dates">
                  {edu.startYear} - {edu.endYear}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h2>Skills</h2>
          <div className="resume-skills">
            {skills.map((skill, i) => (
              <span className="skill-tag" key={i}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default TemplateClassic;
