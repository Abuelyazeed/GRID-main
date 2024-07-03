import React from "react";
import mainBackground from "../../../assets/images/main-banner-bg-3.jpg";
import secondBackground from "../../../assets/images/main-banner-bg-2.jpg";
import { Link } from "react-router-dom";
import Directory from "../../../utilities/Directory";

let sliderImages = [mainBackground, secondBackground];
let itemList = [];
for (let i = 0; i < sliderImages.length; i++) {
  itemList.push(
    <div className="carousel-item active">
      {<img src={sliderImages[i]} alt="slider" />}
    </div>
  );
}

const TopSlider = () => {
  return (
    <div
      className="container-fluid banner-container"
      id="discover-more-section"
    >
      <div className="row banner-row">
        <div className="col-xl-6 left-column align-items-center d-flex">
          <div className="wrapper">
            <div className="col">
              <div className="row">
                <h1 className="main-banner-title">Shifting The Future</h1>
              </div>
              <div className="row">
                <p className="banner-text">
                  Whether you’re an established enterprise or a growing startup,
                  discover flexible spaces and solutions to move your business
                  forward.
                </p>
              </div>
              <div className="row">
                <Link
                  className="button-black discover-more-button"
                  to={Directory.EVENT_DETAILS}
                >
                  Discover more
                </Link>
              </div>
              <div className="row slider-buttons">
                <div className="col-6">
                  <i className="icon-left-arrow" />
                  <a
                    data-bs-target="#carouselExampleControl"
                    data-bs-slide="prev"
                    className="prev-button"
                  >
                    prev
                  </a>
                </div>
                <div className="col-6">
                  <a
                    data-bs-target="#carouselExampleControl"
                    data-bs-slide="next"
                    className="next-button"
                  >
                    next
                  </a>
                  <i className="icon-right-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 right-column">
          <div
            id="carouselExampleControl"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">{itemList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
