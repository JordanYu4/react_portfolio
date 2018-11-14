import React from 'react';

const Contact = () => (
  <div className="inner">
    <h2>Get in touch</h2>
    <p>I'm currently looking for my next challenge in software development. Feel free to reach out!</p>
    <div className="split style1">
      <section>
        <ul className="contact">
          <li>
            <a href="https://docs.google.com/document/export?format=pdf&id=1bQYx9kYCyVcyAL8kPN1uz7te7HbRBeTtu2X1uZ0eUms"
              className="button"
            >
              Download Resume
						</a>
          </li>
          <li>
            <a href="mailto:jordanyu44@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Let's connect!
            </a>
          </li>
          <li>
            <h3>Phone</h3>
            <span>(617) 637-5420</span>
          </li>
          <li>
            <h3>Social</h3>
            <ul className="icons">
              <li>
                <a href="https://github.com/JordanYu4"
                  className="fa-github"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jordan-yu-4400/"
                  className="fa-linkedin"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </div>
);

export default Contact;