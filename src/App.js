import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/App.css';

import Intro from './javascripts/intro.jsx';
import ProjectsPreview from './javascripts/projects_preview.jsx';
import Technologies from './javascripts/technologies.jsx';
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

					<Intro />

					<section id="one" class="wrapper style2 spotlights">
            <ProjectsPreview />
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
              <li>&copy; Jordan Yu. All rights reserved.</li>
            </ul>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
