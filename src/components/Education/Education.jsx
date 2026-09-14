import "./Education.scss";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* Header */}
        <div className="education-header">
          <p>MY EDUCATION</p>
          <h2>Education</h2>
          <span>
            My academic background and educational journey.
          </span>
        </div>

        {/* Education Cards */}
        <div className="education-list">

          {/* MCA */}
          <div className="education-card">
            <div className="education-year">
              2024 - 2026
            </div>

            <div className="education-content">
              <h3>Master of Computer Applications (MCA)</h3>

              <h4>Master of Computer Applications</h4>

              <p>
                Complated MCA with a focus on software developement, Java programming, 
                Web technologies, databases, and application developement.
              </p>

              <div className="education-tags">
                <span>Java</span>
                <span>SQL</span>
                <span>Web Development</span>
              </div>
            </div>
          </div>

          {/* BSc */}
          <div className="education-card">
            <div className="education-year">
              2020 - 2023
            </div>

            <div className="education-content">
              <h3>Bachelor of Science (B.Sc)</h3>

              <h4>MECs</h4>

              <p>
                Completed Bachelor of Science with a strong foundation in
                mathematics, electronics, computer science, and analytical
                problem-solving.
              </p>

              <div className="education-tags">
                <span>Computer Science</span>
                <span>Mathematics</span>
                <span>Electronics</span>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="education-card">
            <div className="education-year">
              2018 - 2020
            </div>

            <div className="education-content">
              <h3>Intermediate</h3>

              <h4>Higher Secondary Education</h4>

              <p>
                Completed higher secondary education and developed a strong
                interest in mathematics and computer-related subjects.
              </p>
            </div>
          </div>

          {/* SSC */}
          <div className="education-card">
            <div className="education-year">
              2018
            </div>

            <div className="education-content">
              <h3>Secondary School Certificate (SSC)</h3>

              <h4>10th Standard</h4>

              <p>
                Completed secondary school education with a strong academic
                foundation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;