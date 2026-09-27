const skills = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "JDBC",
  "REST APIs",
  "Git & GitHub",
  "MySQL",
  "OOPs",
  "DBMS"
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-title">
        <p>What I Work With</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;