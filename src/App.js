import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/App.css';

import Technologies from './javascripts/technologies.jsx';
import Projects from './javascripts/projects.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="sidebar">
          <div class="inner">
            <nav>
              <ul>
                <li><a href="#intro">Welcome</a></li>
                <li><a href="#one">Recent projects</a></li>
                <li><a href="#two">Technologies</a></li>
                <li><a href="#three">Hardware prototyping</a></li>
                <li><a href="#four">Get in touch</a></li>
              </ul>
            </nav>
          </div>
        </section>

			  <div id="wrapper">

					<section id="intro" class="wrapper style1 fullscreen fade-up">
            <div class="inner">
              <h1>Jordan Yu</h1>
              <p>
                I've always enjoyed building tools to help people get things done, and I find a natural outlet for that drive in software
								engineering. I'm avid about organization, acutely detail oriented, and always looking for ways to increase efficiency.
							</p>
              <ul class="actions">
                <li><a href="#one" class="button scrolly">Learn more</a></li>
              </ul>
            </div>
          </section>

					<section id="one" class="wrapper style2 spotlights">
            <Projects />
          </section>

					<section id="two" class="wrapper style3 fade-up">
            <Technologies />
          </section>

					<section id="three" class="wrapper style2 fade-up">
            <div class="inner">
              <h2>Hardware prototyping</h2>
              <p>Always iterating toward a better product, whether it's laser cutting, arduino, or lighting design. </p>
              <ul class="actions">
                <li><a href="hardware_prototyping.html" class="button">Learn more</a></li>
              </ul>
            </div>
          </section>

					<section id="four" class="wrapper style1 fade-up">
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
                            target="_blank">
                            <span class="label">GitHub</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/jordan-yu-4400/"
                            class="fa-linkedin"
                            target="_blank">
                            <span class="label">LinkedIn</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>

        </div>

        <footer id="footer" class="wrapper style1-alt">
          <div class="inner">
            <ul class="menu">
              <li>&copy; Jordan Yu. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
