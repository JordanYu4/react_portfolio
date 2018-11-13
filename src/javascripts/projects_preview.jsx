import React from 'react';

const ProjectsPreview = () => (
  <div className="projects-preview-container">
    <section>
      <a href="#" className="image"><img src="images/exp-dashboard.gif" alt="" data-position="center center" /></a>
      <div class="content">
        <div class="inner">
          <h2>Experience Premier</h2>
          <p>Sentiment analysis for real time speech || MERN stack, React / Redux, MS Azure, IBM Watson</p>
          <ul class="actions">
            {/* <!-- <li><a href="projects.html" class="button">Learn more</a></li> --> */}
            <li><a href="https://experience-premier.herokuapp.com"
              class="button" target="_blank">Live site</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <a href="#" className="image"><img src="images/yelp-helper.gif" alt="" data-position="top center" /></a>
      <div class="content">
        <div class="inner">
          <h2>Yelp-Helper</h2>
          <p>Data visualization tool for making faster decisions || JavaScript, Express, Node, Yelp Fusion, Chart.js</p>
          <ul class="actions">
            {/* <!-- <li><a href="projects.html" class="button">Learn more</a></li> --> */}
            <li><a href="https://yelp-helper.herokuapp.com"
              class="button" target="_blank">Live site</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <a href="#" className="image"><img src="images/gylio-dashboard.gif" alt="" data-position="25% 25%" /></a>
      <div class="content">
        <div class="inner">
          <h2>Gylio</h2>
          <p>Get Your Life in Order: full-stack Trello clone || Ruby on Rails, React / Redux, PostgreSQL</p>
          <ul class="actions">
            {/* <!-- <li><a href="projects.html" class="button">Learn more</a></li> --> */}
            <li><a href="https://gylio.herokuapp.com"
              class="button" target="_blank">Live site</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default ProjectsPreview;