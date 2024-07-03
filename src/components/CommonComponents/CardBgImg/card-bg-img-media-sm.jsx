import React, { Component } from "react";
class CardBgImgMediaSm extends Component {
  state = {
    image: require("../../../assets/images/second-card-component-image-1.jpg"),
    title: "Teams or individuals , all thrive here",
    paragraph:
      "Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis bibendum auctor. Eiusod tempor ut labore auctor aliquet.",
  };
  render() {
    return (
      <div className="card-with-bg small-media-card">
        <div className="data">
          <div className="sec-title">
            <span className="icon-image-gallery-solid"></span>
          </div>
          <h2 className="title">{this.state.title}</h2>
          <p className="text">{this.state.paragraph}</p>
        </div>
      </div>
    );
  }
}

export default CardBgImgMediaSm;
