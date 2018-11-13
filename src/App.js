import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/App.css';

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
            <section>
              <a href="#" class="image"><img src="images/exp-dashboard.gif" alt="" data-position="center center" /></a>
              <div class="content">
                <div class="inner">
                  <h2>Experience Premier</h2>
                  <p>Sentiment analysis for real time speech || MERN stack, React / Redux, MS Azure, IBM Watson</p>
                  <ul class="actions">
                    {/* <li><a href="projects.html" class="button">Learn more</a></li> */}
										<li><a href="https://experience-premier.herokuapp.com"
                      class="button" target="_blank">Live site</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="#" class="image"><img src="images/yelp-helper.gif" alt="" data-position="top center" /></a>
              <div class="content">
                <div class="inner">
                  <h2>Yelp-Helper</h2>
                  <p>Data visualization tool for making faster decisions || JavaScript, Express, Node, Yelp Fusion, Chart.js</p>
                  <ul class="actions">
                    {/* <li><a href="projects.html" class="button">Learn more</a></li> */}
										<li><a href="https://yelp-helper.herokuapp.com"
                      class="button" target="_blank">Live site</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="#" class="image"><img src="images/gylio-dashboard.gif" alt="" data-position="25% 25%" /></a>
              <div class="content">
                <div class="inner">
                  <h2>Gylio</h2>
                  <p>Get Your Life in Order: full-stack Trello clone || Ruby on Rails, React / Redux, PostgreSQL</p>
                  <ul class="actions">
                    {/* <li><a href="projects.html" class="button">Learn more</a></li> */}
										<li><a href="https://gylio.herokuapp.com"
                      class="button" target="_blank">Live site</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </section>

					<section id="two" class="wrapper style3 fade-up">
            <div class="inner">
              <h2>Technologies</h2>
              <p>Constantly sharpening my skills and always hungry to learn more.</p>
              <div class="features">
                <section>
                  <i class="major icon fab fa-code"></i>
                  {/* <i class="major icon fab fa-js"></i> */}
									<h3>JavaScript</h3>
                </section>
                <section>
                  {/* <i class="major fab fa-react"></i> */}
									<i class="icon major fab fa-code"></i>
                  <h3>React / Redux</h3>
                </section>
                <section>
                  <i class="icon major fa-diamond"></i>
                  <h3>Ruby on Rails</h3>
                </section>
                <section>
                  {/* <i class="major fab fa-node"></i> */}
									<i class="icon major fab fa-code"></i>
                  <h3>Node</h3>
                </section>
                <section>
                  <i class="icon major fas fa-database"></i>
                  <h3>MongoDB</h3>
                </section>
                <section>
                  <i class="icon major fas fa-database"></i>
                  <h3>PostgreSQL</h3>
                </section>
                <section>
                  {/* <i class="icon major fab fa-aws"></i> */}
									<i class="icon major fas fa-database"></i>
                  <h3>AWS</h3>
                </section>
                <section>
                  <i class="icon major fab fa-html5"></i>
                  <h3>HTML5</h3>
                </section>
                <section>
                  <i class="icon major fab fa-css3"></i>
                  <h3>CSS3</h3>
                </section>
                <section>
                  {/* <i class="major fab fa-sass"></i> */}
									<i class="icon major fab fa-code"></i>
                  <h3>Sass</h3>
                </section>
                <section>
                  <i class="icon major fa-code"></i>
                  <h3>jQuery</h3>
                </section>
                <section>
                  <i class="icon major fa-chain"></i>
                  <h3>Webpack</h3>
                </section>
                <section>
                  <i class="icon major fa-code"></i>
                  <h3>Jest</h3>
                </section>
                <section>
                  <i class="icon major fa-diamond"></i>
                  <h3>RSpec</h3>
                </section>
                <section>
                  <i class="icon major fa-diamond"></i>
                  <h3>Capybara</h3>
                </section>
                <section>
                  <i class="icon major fas fa-code-branch"></i>
                  <h3>Git</h3>
                </section>
                <section>
                  <i class="icon major fa-code"></i>
                  <h3>Python</h3>
                </section>
                <section>
                  <i class="icon major fa-code"></i>
                  <h3>SQL</h3>
                </section>
                {/* <section>
                  <i class="icon major fa-code"></i>
                  <h3>Google Analytics</h3>
                </section>
                <section>
                  <i class="icon major fa-code"></i>
                  <h3>Adobe Illustrator</h3>
                </section> */}
							</div>
              <ul class="actions">
                <li>
                  <a href="https://docs.google.com/document/export?format=pdf&id=1bQYx9kYCyVcyAL8kPN1uz7te7HbRBeTtu2X1uZ0eUms"
                    class="button"
                  >
                    Download Resume
									</a>
                </li>
              </ul>
            </div>
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
