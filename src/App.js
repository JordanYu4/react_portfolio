import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/App.css';

import Technologies from './javascripts/technologies.jsx';
import Projects from './javascripts/projects.jsx';
import HardwarePrototypingPreview from './javascripts/hardware_prototyping_preview.jsx';
import Contact from './javascripts/contact.jsx';

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
            <HardwarePrototypingPreview />
          </section>

					<section id="four" class="wrapper style1 fade-up">
            <Contact />
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
