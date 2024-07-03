import React, { Component } from "react";
class EventBreadcrumb extends Component {
  state = {};
  render() {
    return (
      <div className="banner event-details">
        <div className="row content align-items-center ">
          <div className="col-12 justify-content">
            <h1 className="title">Event Details</h1>
            <ul className="breadcrumb">
              <li>
                <a href="src/components/CommonComponents/breadcrumb/event-details-breadcrumbs#">Home</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/event-details-breadcrumbs#">GRID Events</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/event-details-breadcrumbs#">Events</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default EventBreadcrumb;
