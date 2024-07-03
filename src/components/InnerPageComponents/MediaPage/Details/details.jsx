import React, { Component } from 'react';
import image from '../../../../assets/images/MediaDet.jpg';
import MediaCardSM from '../MediaCard/MediaCard';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

class MediaDetails extends Component {
  state = {};
  render() {
    return (
      <div className="MediaDet">
        <div className="wrapper ">
          <div className="row">
            <div className="col">
              <img className="img" src={image} alt="A man typing on computer" />
            </div>
            <div className="col desc">
              <h3 className="sec-title-cont">
                <span className="icon-Line"></span>
                <span className="sec-title">Fintech, Co-Working,</span>
                <br></br>
                <span className="sec-title2">Innovation , Fincaitional .</span>
              </h3>
              <h1 className="title">
                David Droga Still Has Faith in Online Advertising
              </h1>
              <div>
                <span className="icon-calendar cal"></span>
                <span className="cal-title"> 18 - 3 - 2022</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pag">
          <div className="title-cont">
            <span className="icon-Line"></span>
            <span className="title">Uploaded Photos</span>
          </div>
          <div className="row">
            <Link className="col" to="/en/media-details">
              <MediaCardSM />
            </Link>
            <Link className="col" to="/en/media-details">
              <MediaCardSM />
            </Link>
            <Link className="col" to="/en/media-details">
              <MediaCardSM />
            </Link>
          </div>
          <div className="row">
            <Link className="col" to="/en/media-details">
              <MediaCardSM className="card" />
            </Link>
            <Link className="col" to="/en/media-details">
              <MediaCardSM />
            </Link>
            <Link className="col" to="/en/media-details">
              <MediaCardSM />
            </Link>
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

export default MediaDetails;
