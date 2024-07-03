import React from "react";
//import { Header, Footer } from "../HomePageComponents";
import ArticleCard from "../../CommonComponents/CardTopImg/ArticleCard";
import ArticlesBreadcrumb from "../../CommonComponents/breadcrumb/articles-breadcrumbs";
import ListingPagination from "../../CommonComponents/ListingPagination/Listing-Pagination";
import ListingSort from "../../CommonComponents/ListingSort/ListingSort";

const ArticlePageListing = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <ArticlesBreadcrumb></ArticlesBreadcrumb>
      <div className="wrapper position-relative">
        <div className="row mb-4">
          <ListingSort></ListingSort>
          <div className="col-md-4">
            <ArticleCard></ArticleCard>
          </div>
          <div className="col-md-4">
            <ArticleCard></ArticleCard>
          </div>
          <div className="col-md-4">
            <ArticleCard></ArticleCard>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-4">
            <ArticleCard></ArticleCard>
          </div>
          <div className="col-md-4">
            <ArticleCard></ArticleCard>
          </div>
          <div className="col-md-4">
            <ArticleCard></ArticleCard>
          </div>
        </div>
      </div>

      <ListingPagination></ListingPagination>

      {/* <Footer></Footer> */}
    </div>
  );
};
export default ArticlePageListing;
