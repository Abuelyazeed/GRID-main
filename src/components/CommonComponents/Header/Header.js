import React from "react";
import headerlogo from "../../../assets/images/header-logo.svg";
import ellipseimg from "../../../assets/images/ellipse-img.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Directory from "../../../utilities/Directory";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const handleLanguageChange = (event) => {
    event.preventDefault();

    sessionStorage.setItem("language", Directory.AR);

    if (location === `/${Directory.EN}`) {
      navigate(Directory.AR);
    } else {
      navigate(location.replace("/en/", "/ar/"));
    }
  };

  const BackHome = () => {
    if (sessionStorage.getItem("language") === "en") {
      navigate(Directory.EN);
    } else {
      navigate(Directory.AR);
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-xl bg-black">
      <div className="container center-content">
        <div className="navbar-brand">
          <img
            className="brand-logo"
            src={headerlogo}
            alt="Header Logo"
            onClick={BackHome}
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
        >
          <span className="icon-nav-toggler" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav navbar-nav-scroll">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="src/components/CommonComponents/Header/Header#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
              >
                About
                <span className="icon-down-arrow" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to={Directory.EN + "/" + Directory.ABOUT_GRID}
                  >
                    <span className="route">Our Story</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Collaborate</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Innovate</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Learn</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Grow</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={Directory.ERROR}>
                FinTech Egypt
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="src/components/CommonComponents/Header/Header#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Get Involved
                <span className="icon-down-arrow" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Startups</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Investors</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Mentors</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Financial institutions</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Interested in FinTech</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Students</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="src/components/CommonComponents/Header/Header#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Services
                <span className="icon-down-arrow" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Publish News</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Publish Articles</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Request to be a member</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={Directory.ERROR}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="src/components/CommonComponents/Header/Header#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                More
                <span className="icon-down-arrow" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to={Directory.EN + "/" + Directory.SUCCESS_STORIES}
                  >
                    <span className="route">Success Stories</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={Directory.EN + "/" + Directory.MEDIA_GALLERY}
                  >
                    <span className="route">Media Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Grid Benefits</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">Member Benefits</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={Directory.ERROR}>
                    <span className="route">GRID Programs</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navbar-search-lang">
            <ul className="navbar-nav">
              <li className="nav-item search">
                <a
                  className="nav-link"
                  href="src/components/CommonComponents/Header/Header#"
                >
                  <span className="icon-search" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="src/components/CommonComponents/Header/Header#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  EN
                  <span className="icon-down-arrow" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item disabled">
                      <span className="route">EN</span>
                    </button>
                  </li>
                  <li onClick={handleLanguageChange}>
                    <button className="dropdown-item">
                      <span className="route">AR</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="edit-profile">
              <ul className="navbar-nav profile">
                <li className="nav-item dropdown">
                  <img
                    className="profile-avatar"
                    src={ellipseimg}
                    alt="Profile"
                  />
                  <a
                    className="nav-link dropdown-toggle"
                    href="src/components/CommonComponents/Header/Header#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    Nada Walaa
                    <span className="icon-down-arrow" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={Directory.ERROR}>
                        <span className="route">Edit Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={Directory.ERROR}>
                        <span className="route">Change Password</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={Directory.ERROR}>
                        <span className="route">Sign Out</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
