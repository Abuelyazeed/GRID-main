import React from "react";
import ArticleCard from "../../CommonComponents/CardTopImg/ArticleCard";
import { Link } from "react-router-dom";

import Directory from "../../../utilities/Directory";

const ArticleSection = () => {
  return (
    <div className="wrapperarticles article-section" id="articles-section">
      <div className="row">
        <div className="col-md-9 col-sm-8 col-xs-12">
          <h3 className="subtitle-magenta">Success Stories</h3>
          <h2 className="secondary-title-black">Read up on latest Articles</h2>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-12 buttonarticles ">
          <button className="button-purple">
            <Link to={Directory.ARTICLE_LISTING}>View All</Link>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="lineArticles my-5"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 card-article">
          <ArticleCard></ArticleCard>
        </div>
        <div className="col-md-4 card-article">
          <ArticleCard></ArticleCard>
        </div>
        <div className="col-md-4 card-article">
          <ArticleCard></ArticleCard>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
