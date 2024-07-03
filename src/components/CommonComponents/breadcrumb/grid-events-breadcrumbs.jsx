import React, { Component } from "react";
class GridEventsBreadcrumb extends Component {
  state = {};
  render() {
    return (
      <div className="banner events-banner">
        <div className="row content align-items-center ">
          <div className="col-12 justify-content">
            <h1 className="title">GRID Events</h1>
            <ul className="breadcrumb">
              <li>
                <a href="src/components/CommonComponents/breadcrumb/grid-events-breadcrumbs#">Home</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/grid-events-breadcrumbs#">GRID Events</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GridEventsBreadcrumb;
