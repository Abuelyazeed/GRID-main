import React, { Component } from "react";
class ArticlesBreadcrumb extends Component {
  state = {};
  render() {
    return (
      <div className="banner articles-banner">
        <div className="row content align-items-center ">
          <div className="col-12 justify-content">
            <h1 className="title">Articles</h1>
            <ul className="breadcrumb">
              <li>
                <a href="src/components/CommonComponents/breadcrumb/articles-breadcrumbs#">Home</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/articles-breadcrumbs#">Success Stories</a>
              </li>
              <li>
                <a href="src/components/CommonComponents/breadcrumb/articles-breadcrumbs#">Articles</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesBreadcrumb;
