import React from 'react';
import cardimg from '../../../assets/images/card-1-image.jpg';
import { Link } from 'react-router-dom';

const ArticleCard = () => {
  return (
    <div className="card border-0 rounded-0 article-card">
      <div className="inner">
        <img
          src={cardimg}
          className="card-img-top rounded-0"
          alt="A man writing in a notebook and smiling"
        />
      </div>
      <div className="card-body">
        <p className="top mt-2">
          <span className="icon-Line"></span> Payment, Wealth management, ..
          <span className="pink">+5</span>
        </p>

        <div className="middle">
          <Link to="">David Droga Still Has Faith in Online Advertising</Link>
        </div>
        <div className="bottom">
          <span className="name">
            <span className="icon-Pen"></span>
            <span> AHMED SOLIMAN</span>
          </span>

          <span className="date">
            <span className="icon-calendar"></span>
            <span> 18 - 3 - 2022</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
