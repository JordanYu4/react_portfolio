import React from 'react';

const Technologies = () => (
  <div className="inner">
    <h2>Technologies</h2>
    <p>Constantly sharpening my skills and always hungry to learn more.</p>
    <div className="features">
      <section>
        <i className="major icon fab fa-code"></i>
        {/* <i className="major icon fab fa-js"></i> */}
        <h3>JavaScript</h3>
      </section>
      <section>
        {/* <i className="major fab fa-react"></i> */}
        <i className="icon major fab fa-code"></i>
        <h3>React / Redux</h3>
      </section>
      <section>
        <i className="icon major fa-diamond"></i>
        <h3>Ruby on Rails</h3>
      </section>
      <section>
        {/* <i className="major fab fa-node"></i> */}
        <i className="icon major fab fa-code"></i>
        <h3>Node</h3>
      </section>
      <section>
        <i className="icon major fas fa-database"></i>
        <h3>MongoDB</h3>
      </section>
      <section>
        <i className="icon major fas fa-database"></i>
        <h3>PostgreSQL</h3>
      </section>
      <section>
        {/* <i className="icon major fab fa-aws"></i> */}
        <i className="icon major fas fa-database"></i>
        <h3>AWS</h3>
      </section>
      <section>
        <i className="icon major fab fa-html5"></i>
        <h3>HTML5</h3>
      </section>
      <section>
        <i className="icon major fab fa-css3"></i>
        <h3>CSS3</h3>
      </section>
      <section>
        {/* <i className="major fab fa-sass"></i> */}
        <i className="icon major fab fa-code"></i>
        <h3>Sass</h3>
      </section>
      <section>
        <i className="icon major fa-code"></i>
        <h3>jQuery</h3>
      </section>
      <section>
        <i className="icon major fa-chain"></i>
        <h3>Webpack</h3>
      </section>
      <section>
        <i className="icon major fa-code"></i>
        <h3>Jest</h3>
      </section>
      <section>
        <i className="icon major fa-diamond"></i>
        <h3>RSpec</h3>
      </section>
      <section>
        <i className="icon major fa-diamond"></i>
        <h3>Capybara</h3>
      </section>
      <section>
        <i className="icon major fas fa-code-branch"></i>
        <h3>Git</h3>
      </section>
      <section>
        <i className="icon major fa-code"></i>
        <h3>Python</h3>
      </section>
      <section>
        <i className="icon major fa-code"></i>
        <h3>SQL</h3>
      </section>
      {/* <section>
                  <i className="icon major fa-code"></i>
                  <h3>Google Analytics</h3>
                </section>
                <section>
                  <i className="icon major fa-code"></i>
                  <h3>Adobe Illustrator</h3>
                </section> */}
    </div>
    <ul className="actions">
      <li>
        <a href="https://docs.google.com/document/export?format=pdf&id=1bQYx9kYCyVcyAL8kPN1uz7te7HbRBeTtu2X1uZ0eUms"
          className="button"
        >
          Download Resume
									</a>
      </li>
    </ul>
  </div>
);

export default Technologies;