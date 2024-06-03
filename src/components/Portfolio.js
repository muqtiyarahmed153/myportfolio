// src/components/Portfolio.js

import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import PureCounter from '@srexi/purecounterjs';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'glightbox/dist/css/glightbox.css';
import Waypoint from 'waypoints/lib/noframework.waypoints';
import portfolioImage1 from '../assets/img/portfolio/portfolio-2.jpg';
import portfolioImage2 from '../assets/img/portfolio/portfolio-5.jpg';
import portfolioImage3 from '../assets/img/portfolio/portfolio-9.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter=".filter-web" className="filter-active">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolioImage1} className="img-fluid" alt="Portfolio 2" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolioImage1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolioImage2} className="img-fluid" alt="Portfolio 5" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolioImage2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolioImage3} className="img-fluid" alt="Portfolio 9" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolioImage3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">
                    <i className="bx bx-plus"></i>
                  </a>
                  {/* <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details">
                    <i className="bx bx-link"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
