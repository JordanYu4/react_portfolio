import React from 'react';

const Contact = () => (
  <div class="inner">
    <h2>Get in touch</h2>
    <p>I'm currently looking for my next challenge in software development. Feel free to reach out!</p>
    <div class="split style1">
      <section>
        <ul class="contact">
          <li>
            <a href="https://docs.google.com/document/export?format=pdf&id=1bQYx9kYCyVcyAL8kPN1uz7te7HbRBeTtu2X1uZ0eUms"
              class="button"
            >
              Download Resume
											</a>
          </li>
          <li>
            <h3>Phone</h3>
            <span>(617) 637-5420</span>
          </li>
          <li>
            <h3>Social</h3>
            <ul class="icons">
              <li>
                <a href="https://github.com/JordanYu4"
                  class="fa-github"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span class="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jordan-yu-4400/"
                  class="fa-linkedin"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span class="label">LinkedIn</span>
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