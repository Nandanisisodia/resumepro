const TemplateMinimalATS = ({ resume }) => {
  const {
    personalInfo = {},
    education = [],
    experience = [],
    projects = [],
    skills = [],
    certifications = [],
  } = resume;

  return (
    <div className="resume-preview resume-ats-minimal" id="resume-preview">
      <header className="resume-header">
        <h1>{personalInfo.fullName || "Your Name"}</h1>
        <p className="resume-contact">
          {[
            personalInfo.email,
            personalInfo.phone,
            personalInfo.location,
            personalInfo.linkedin,
            personalInfo.github,
          ]
            .filter(Boolean)
            .join("  |  ")}
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
              <p className="ats-line-bold">
                {exp.role} - {exp.company}
              </p>
              <p className="ats-line-sub">
                {exp.startDate} - {exp.endDate || "Present"}
              </p>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section>
          <h2>Projects</h2>
          {projects.map((proj, i) => (
            <div className="resume-item" key={i}>
              <p className="ats-line-bold">{proj.name}</p>
              {proj.description && <p>{proj.description}</p>}
              {proj.techStack && <p className="ats-line-sub">Tech: {proj.techStack}</p>}
              {proj.link && <p className="ats-line-sub">{proj.link}</p>}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section>
          <h2>Education</h2>
          {education.map((edu, i) => (
            <div className="resume-item" key={i}>
              <p className="ats-line-bold">
                {edu.degree} - {edu.institution}
              </p>
              <p className="ats-line-sub">
                {edu.startYear} - {edu.endYear}
              </p>
            </div>
          ))}
        </section>
      )}

      {certifications.length > 0 && (
        <section>
          <h2>Certifications</h2>
          {certifications.map((cert, i) => (
            <p key={i}>
              {cert.name} - {cert.issuer} ({cert.year})
            </p>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h2>Skills</h2>
          {skills.map((group, i) => (
            <p key={i}>
              <strong>{group.category}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>
      )}
    </div>
  );
};

export default TemplateMinimalATS;
