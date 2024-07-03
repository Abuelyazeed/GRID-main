import React from 'react';
import bannerimg from '../../../assets/images/sec2-image.jpg';

const AboutGrid = () => {
  return (
    <div className="row about-grid g-0" id="about-grid-section">
      <img
        className="col-xl-6 grid-column"
        src={bannerimg}
        alt="Section 2"
      ></img>
      <div className="col-xl-6 grid-column">
        <div className="section-grid-about">
          <h3 className="subtitle-magenta">about grid</h3>
          <h2 className="secondary-title-black">Enhanced social distancing</h2>
          <div className="section-content">
            <p>
              Whether you’re an established enterprise or a growing startup,
              discover flexible spaces and solutions to move your business
              forward.{' '}
            </p>
            <p>
              FinTech has recently become a promising and emerging industry
              across the globe that uses technology and innovation to broaden
              the frontiers of financial activities.{' '}
            </p>
          </div>
          <a
            className="button-purple"
            href="src/components/HomePageComponents/AboutGridSection/AboutGrid#"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
