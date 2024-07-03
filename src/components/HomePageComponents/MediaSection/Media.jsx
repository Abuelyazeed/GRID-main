import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBgImgMedia from "../../CommonComponents/CardBgImg/card-bg-img-media";
import { Link } from "react-router-dom";

class MediaSection extends Component {
  state = {
    cards: [1, 2, 3, 4, 5],
  };
  render() {
    const settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
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
      <div className="media-section" id="media-section">
        <div className="wrapper">
          <Row>
            <Col l={4} md={6}>
              <h3 className="subtitle subtitle-magenta">Multioffice Media</h3>
              <h2 className="section-title secondary-title-white">
                Our latest Media
              </h2>
            </Col>
            <Col l={4} md={6} className="button-cont">
              <Link
                className="button-purple button"
                to="/en/media-gallery-page"
              >
                View All
              </Link>
            </Col>
          </Row>
        </div>
        <Slider {...settings}>
          {this.state.cards.map((card) => (
            <Link to="/en/media-details">
              <CardBgImgMedia />
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}

export default MediaSection;
