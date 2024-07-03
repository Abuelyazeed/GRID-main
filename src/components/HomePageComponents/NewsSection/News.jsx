import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";

import CardBgImgNews from "../../CommonComponents/CardBgImg/card-bg-img-news";
class NewsSection extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
    console.log("next");
  }
  previous() {
    this.slider.slickPrev();
    console.log("prev");
  }
  state = {
    cards: [1, 2, 3, 4, 5],
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="wrapper" id="news-section">
        <div>
          <Row>
            <Col l={6} md={8}>
              <h3 className="subtitle subtitle-magenta">Multioffice News</h3>
              <h2 className="section-title secondary-title-black">
                Read up on latest
              </h2>
            </Col>
            <Col l={4} md={4} className="button-cont">
              <button className="button" onClick={this.previous}>
                <span className="icon-left-arrow"></span>
              </button>
              <button className="button" onClick={this.next}>
                <span className="icon-right-arrow"></span>
              </button>
            </Col>
          </Row>
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.state.cards.map((card) => (
            <CardBgImgNews />
          ))}
        </Slider>
        <div className="wrapper">
          <Row className="center">
            <a
              className="button-purple big-button"
              href="src/components/HomePageComponents/NewsSection/News"
            >
              Check all News
            </a>
          </Row>
        </div>
      </div>
    );
  }
}

export default NewsSection;
