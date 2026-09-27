function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-image">
        <img src="/profile.jpg" alt="Akhila" />
      </div>

      <div className="hero-content">

        <p className="intro">Hello, I'm</p>

        <h1>Akhila</h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          Computer Science Engineering student and aspiring software
          developer passionate about building modern, responsive and
          user-friendly web applications.
        </p>

        <div className="hero-tech">
          <span>Java</span>
          <span>React</span>
          <span>Spring Boot</span>
          <span>SQL</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect
          </a>

          <a
            href="/Akhila_Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;