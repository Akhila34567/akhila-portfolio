function Certifications() {
  const certifications = [
    "Full Stack Java",
    "Microsoft Azure Fundamentals"
  ];

  return (
    <section id="certifications" className="section">
      <div className="section-title">
        <p>My Learning</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-container">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate}>
            <h3>{certificate}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;