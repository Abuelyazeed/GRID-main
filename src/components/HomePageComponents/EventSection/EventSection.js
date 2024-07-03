import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../../utilities/Directory";
import EventCard from "../../CommonComponents/CardTopImg/EventCard";

const EventSection = () => {
  return (
    <div className="wrapper event-section">
      <div className="row">
        <div className="col-md-5">
          <h3 className="subtitle-magenta">MULTIOFFICE EVENTS</h3>
          <h2 className="secondary-title-black mb-4">
            Read up on latest Events
          </h2>
          <div className="carousal-buttons mb-5 article-carousal-btn">
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              className="icon-right-arrow carousal-reversed me-3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              className="icon-right-arrow carousal"
            ></button>
          </div>

          <Link className="button-purple mb-4" to={Directory.EVENT_LISTING}>
            View All
          </Link>
        </div>

        <div className="col-md-7 ">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper">
                  <EventCard></EventCard>
                  <EventCard></EventCard>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-wrapper">
                  <EventCard></EventCard>
                  <EventCard></EventCard>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-wrapper">
                  <EventCard></EventCard>
                  <EventCard></EventCard>
                </div>
              </div>
            </div>
          </div>
          <div className="carousal-buttons mt-5 article-carousal-btn-mobile">
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              className="icon-right-arrow carousal-reversed me-3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              className="icon-right-arrow carousal"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
