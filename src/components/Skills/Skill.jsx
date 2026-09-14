import "./Skill.scss"

const Skills = () => {
    return(
        <section className="skills" id="skills">
            <div className="skills-container">

                <div className="skills-header">
                    <h2>MY Skills</h2>
                    <p>
                        Technologies and tools I use to build modern web applications.
                    </p>
                    </div>
                  <div className="skills-grid">

                    <div className="skill-card">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                        </ul>

                    </div>
                    <div className="skill-card">
                        <h3>Backend</h3>
                        <ul>
                            <li>Core Java</li>
                            <li>Advanced Java</li>
                            <li>Spring Boot</li>
                            <li>REST API</li>
                        </ul>

                    </div>

                    <div className="skill-card">
                        <h3>Database</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>SQL</li>
                            <li>Hibernate</li>
                        </ul>
                    </div>
                      
                      <div className="skill-card">
                        <h3>Tools</h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>VS Code</li>
                            <li>Intellij</li>
                            <li>Eclipse</li>
                        </ul>

                      </div>

                  </div>  

            </div>

        </section>
    )
}

export default Skills;