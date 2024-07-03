import React, { Component } from "react";
class NewsBreadcrumb extends Component {
  state = {};
  render() {
    return (
      <div className="banner our-news-banner">
        <div className="row content align-items-center ">
          <div className="col-12 justify-content">
            <h1 className="title">Our News</h1>
            <ul className="breadcrumb">
              <li>
                <a href="src/components/CommonComponents/breadcrumb/news-breadcrumbs#">Home</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/news-breadcrumbs#">Success Stoaries</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/news-breadcrumbs#">News</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsBreadcrumb;
