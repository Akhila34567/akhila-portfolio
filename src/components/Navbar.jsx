function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Akhila.</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Akhila34567"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

export default Navbar;