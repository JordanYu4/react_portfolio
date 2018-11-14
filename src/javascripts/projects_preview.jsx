import React from 'react';

const ProjectsPreview = () => {
  const expUrl = "https://experience-premier.herokuapp.com";
  const yelpHelperUrl = "https://yelp-helper.herokuapp.com";
  const gylioUrl = "https://gylio.herokuapp.com";

  return (
    <div className="projects-preview-container">
      <section>
        <a href={expUrl} className="image"><img src="images/exp-dashboard.gif" alt="" data-position="center center" /></a>
        <div class="content">
          <div class="inner">
            <h2>Experience Premier</h2>
            <p>Sentiment analysis for real time speech || MERN stack, React / Redux, MS Azure, IBM Watson</p>
            <ul class="actions">
              {/* <!-- <li><a href="projects.html" class="button">Learn more</a></li> --> */}
              <li><a href={expUrl}
                class="button" target="_blank" rel="noopener noreferrer">Live site</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <a href={yelpHelperUrl} className="image"><img src="images/yelp-helper.gif" alt="" data-position="top center" /></a>
        <div class="content">
          <div class="inner">
            <h2>Yelp-Helper</h2>
            <p>Data visualization tool for making faster decisions || JavaScript, Express, Node, Yelp Fusion, Chart.js</p>
            <ul class="actions">
              {/* <!-- <li><a href="projects.html" class="button">Learn more</a></li> --> */}
              <li><a href={yelpHelperUrl}
                class="button" target="_blank rel="noopener noreferrer>Live site</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <a href={gylioUrl} className="image"><img src="images/gylio-dashboard.gif" alt="" data-position="25% 25%" /></a>
        <div class="content">
          <div class="inner">
            <h2>Gylio</h2>
            <p>Get Your Life in Order: full-stack Trello clone || Ruby on Rails, React / Redux, PostgreSQL</p>
            <ul class="actions">
              {/* <!-- <li><a href="projects.html" class="button">Learn more</a></li> --> */}
              <li><a href={gylioUrl}
                class="button" target="_blank rel="noopener noreferrer>Live site</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPreview;