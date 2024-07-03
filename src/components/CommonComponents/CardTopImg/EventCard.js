import React from 'react';
import cardimg from '../../../assets/images/card-1-image.jpg';

const EventCard = () => {
  return (
    <div className="card border-0 event-card me-5">
      <div className="inner">
        <img
          src={cardimg}
          className="card-img-top rounded-0"
          alt="A man writing in a notebook and smiling"
        />
      </div>
      <div className="card-body px-0">
        <p className="card-text top">
          <span className="icon-calendar pe-1"></span>
          <span className="top">September 13, 2019 - August 2, 2021</span>
        </p>
        <p className="card-text middle">
          David Droga Still Has Faith in Online Advertising
        </p>
        <a
          href="src/components/CommonComponents/CardTopImg/EventCard"
          className="card-text bottom link"
        >
          READ MORE
          <span className="icon-right-arrow"></span>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
