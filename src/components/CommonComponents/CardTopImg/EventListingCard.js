import React from 'react';
import cardimg from '../../../assets/images/card-1-image.jpg';
import { Link } from 'react-router-dom';
import Directory from '../../../utilities/Directory';

const EventListingCard = () => {
  return (
    <div className="card border-0 rounded-0 event-listing-card">
      <div className="inner">
        <img
          src={cardimg}
          className="card-img-top rounded-0"
          alt="A man writing in a notebook and smiling"
        />
      </div>
      <div className="card-body">
        <p className="top mt-1">
          <span className="icon-Line"></span> Payment, Wealth management, ..
          <span className="pink">+5</span>
        </p>

        <div className="middle">
          <Link to={Directory.EVENT_DETAILS}>Tips for higher productivity</Link>
        </div>
        <div className="bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            dolor ut nibh rhoncus condimentum. Donec interdum tempus eros, a
            maximus neque viverra at. Sed eros velit, venenatis sit amet lectus
            vel, efficitur rhoncus dui. Duis lobortis sapien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventListingCard;
