import React from "react";

const ListingPagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className="page-link rounded-0  px-3 previous"
            href="src/components/CommonComponents/ListingPagination/Listing-Pagination#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link rounded-0 px-3" href="src/components/CommonComponents/ListingPagination/Listing-Pagination#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link rounded-0  px-3" href="src/components/CommonComponents/ListingPagination/Listing-Pagination#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link rounded-0  px-3" href="src/components/CommonComponents/ListingPagination/Listing-Pagination#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link rounded-0  px-3" href="src/components/CommonComponents/ListingPagination/Listing-Pagination#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link rounded-0  px-3" href="src/components/CommonComponents/ListingPagination/Listing-Pagination#">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link rounded-0  px-3 next" href="src/components/CommonComponents/ListingPagination/Listing-Pagination#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ListingPagination;
