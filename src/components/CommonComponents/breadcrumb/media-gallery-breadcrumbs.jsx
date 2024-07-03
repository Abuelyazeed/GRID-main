import React, { Component } from "react";
class MediaBreadcrumb extends Component {
  state = {};
  render() {
    return (
      <div className="banner media-gallery-banner">
        <div className="row content align-items-center ">
          <div className="col-12 justify-content">
            <h1 className="title">Media Gallery</h1>
            <ul className="breadcrumb">
              <li>
                <a href="src/components/CommonComponents/breadcrumb/media-gallery-breadcrumbs#">Home</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/media-gallery-breadcrumbs#">Media Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaBreadcrumb;
