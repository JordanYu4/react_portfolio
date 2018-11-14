import React, { Component } from 'react';
// import logo from './logo.svg';
import './stylesheets/main.css';

import Sidebar from './javascripts/sidebar.jsx';
import Intro from './javascripts/intro.jsx';
import ProjectsPreview from './javascripts/projects_preview.jsx';
import Technologies from './javascripts/technologies.jsx';
import HardwarePrototypingPreview from './javascripts/hardware_prototyping_preview.jsx';
import Contact from './javascripts/contact.jsx';
import Footer from './javascripts/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />

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

        <Footer />
      </div>
    );
  }
}

export default App;
