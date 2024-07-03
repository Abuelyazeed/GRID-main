import React, { Component } from "react";
import image from "../../../../assets/images/MediaDet.jpg";
import MediaCardSM from "../MediaCard/MediaCard";
import Pagination from "react-bootstrap/Pagination";
import MediaBreadcrumb from "../../../CommonComponents/breadcrumb/media-gallery-breadcrumbs";
class MediaPage extends Component {
  state = {};
  render() {
    return (
      <div className="MediaDet">
        <MediaBreadcrumb />
        <div className="pag">
          <div className="title-cont"></div>
          <div className="row">
            <div className="col">
              <MediaCardSM />
            </div>
            <div className="col">
              <MediaCardSM />
            </div>
            <div className="col">
              <MediaCardSM />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <MediaCardSM className="card" />
            </div>
            <div className="col">
              <MediaCardSM />
            </div>
            <div className="col">
              <MediaCardSM />
            </div>
          </div>
        </div>
        <div className="pagination">
          <Pagination className="paginationItem">
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next className="paginationNext" />
          </Pagination>
        </div>
      </div>
    );
  }
}

export default MediaPage;
