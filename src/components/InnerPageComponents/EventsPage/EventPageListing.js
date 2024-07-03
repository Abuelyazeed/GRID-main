import React from "react";
import GridEventsBreadcrumb from "../../CommonComponents/breadcrumb/grid-events-breadcrumbs";
import EventListingCard from "../../CommonComponents/CardTopImg/EventListingCard";
import ListingPagination from "../../CommonComponents/ListingPagination/Listing-Pagination";

const EventPageListing = () => {
  return (
    <div className="listing-page">
      <GridEventsBreadcrumb></GridEventsBreadcrumb>
      <div className="wrapper postition-relative">
        <div className="row my-5">
          <div className="col-md-6">
            <EventListingCard></EventListingCard>
          </div>
          <div className="col-md-6">
            <EventListingCard></EventListingCard>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <EventListingCard></EventListingCard>
          </div>
          <div className="col-md-6">
            <EventListingCard></EventListingCard>
          </div>
        </div>
      </div>
      <ListingPagination></ListingPagination>
    </div>
  );
};

export default EventPageListing;
