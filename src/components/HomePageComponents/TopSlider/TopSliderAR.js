import React from "react";
import mainBackground from "../../../assets/images/main-banner-bg-3.jpg";
import secondBackground from "../../../assets/images/main-banner-bg-2.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Directory from "../../../utilities/Directory";

let sliderImages = [mainBackground, secondBackground];
let itemList = [];
for (let i = 0; i < sliderImages.length; i++) {
  itemList.push(
    <Carousel.Item>
      <img src={sliderImages[i]} alt="slider" />
    </Carousel.Item>
  );
}

const TopSliderAR = () => {
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
                <h1 className="main-banner-title">
                  التكنولوجيا المالية والابتكار
                </h1>
              </div>
              <div className="row">
                <p className="banner-text">
                  سواء كنت مؤسسة راسخة أو شركة ناشئة ، اكتشف المساحات والحلول
                  المرنة لدفع عملك إلى الأمام.
                </p>
              </div>
              <div className="row">
                <Link className="button-black" to={Directory.EVENT_DETAILS}>
                  اكتشف الان
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 right-column">
          <Carousel className="banner-carousel"> {itemList} </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TopSliderAR;
