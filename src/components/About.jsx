function About() {
  return (
    <section id="about" className="section">

      <div className="section-title">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">

        <div className="about-content">

          <p>
            I am a Computer Science Engineering student with a strong
            interest in software development and full-stack application
            development.
          </p>

          <p>
            I have hands-on experience with Java, React, Spring Boot,
            JDBC, SQL and REST APIs. I enjoy creating practical
            applications and learning new technologies.
          </p>

          <p>
            I am currently looking for an opportunity where I can apply
            my technical skills, work on real-world projects and grow
            as a software developer.
          </p>

        </div>

        <div className="about-info">

          <div className="info-card">
            <h3>Education</h3>
            <p>B.Tech – Computer Science Engineering</p>
          </div>

          <div className="info-card">
            <h3>Role</h3>
            <p>Full Stack Developer</p>
          </div>

          <div className="info-card">
            <h3>Focus</h3>
            <p>Java • React • Spring Boot</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;