import React from 'react';

const Projects = () => {

  return (
    <div>
			<header id="header">
        <a href="index.html" className="title">JORDAN YU</a>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html" className="active">Projects</a></li>
            <li><a href="prototyping.html">Prototyping</a></li>
          </ul>
        </nav>
      </header>

			<div id="wrapper">

					<section id="main" className="wrapper">
          <div className="inner">
            <h1 className="major">A Generic Page</h1>
            <span className="image fit"><img src="images/pic04.jpg" alt="" /></span>
            <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique.</p>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
          </div>
        </section>

      </div>

			<footer id="footer" className="wrapper alt">
        <div className="inner">
          <ul className="menu">
            <li>&copy; Jordan Yu. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Projects;