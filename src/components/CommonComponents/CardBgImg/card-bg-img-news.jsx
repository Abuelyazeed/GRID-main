import React, { Component } from "react";
class CardBgImgNews extends Component {
  state = {};
  render() {
    return (
      <div className="card-with-bg news-card">
        <div className="data">
          <div className="sec-title">
            <span className="icon-calendar calendar"></span>
            <span> 18 - 3 - 2022</span>
          </div>
          <h2 className="title">Teams or individuals , all thrive here</h2>
          <p className="sub-title">CATEGORY</p>
          <p className="text">
            Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin lorem quis bibendum auctor. Eiusod tempor ut labore
            auctor aliquet.
          </p>
          <a href="src/components/CommonComponents/CardBgImg/card-bg-img-news" className="readmore-link" title="Read More">
            READ MORE<span className="icon-setting icon-right-arrow"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default CardBgImgNews;
