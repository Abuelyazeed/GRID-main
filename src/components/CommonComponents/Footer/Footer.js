import React from "react";
import logo from "../../../assets/images/header-logo.svg";

const Footer = ({ toggleTheme }) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-5 first-column">
          <div className="info">
            <img src={logo} alt="" className="logo" />
            <p className="mb-5 text">
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
            <div className="social">
              <a
                href="src/components/CommonComponents/Footer/Footer"
                className="icon-facebook"
              ></a>
              <a
                href="src/components/CommonComponents/Footer/Footer"
                className="icon-twitter"
              ></a>
              <a
                href="src/components/CommonComponents/Footer/Footer"
                className="icon-linkedin"
              ></a>
            </div>

            <div className="input-group bg-transparent position-relative w-75 pb-2">
              <input
                type="email"
                className="form-control bg-transparent rounded-0 mt-5 p-3"
                placeholder="Subscribe For Newsletters"
              />
              <button
                className="btn btn-theme mt-5 position-absolute"
                type="submit"
              >
                Go <i className="icon-down-chevron"></i>
              </button>
            </div>

            <div className="copyright">
              &copy; 2022 GRID . All rights reserved.
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 second-column">
          <div className="GRIDLINKS">
            <h5 className="text-light mb-4 title">GRID Links</h5>
            <ul className="list-unstyled text lh-lg">
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  News & Highlights
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  Articles & Blogs
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  Media Library
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  Contact Us
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  Benefits
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  FAQs
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  Events
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  About Us
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  {" "}
                  Eco-System
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 third-column">
          <div className="contact-us">
            <h5 className="text-light mb-4 title">Contact Us</h5>
            <ul className="list-unstyled text lh-lg mb-5">
              <li>
                <i className="icon-location pe-3"></i> Cairo - Downtown Street
                23
              </li>
              <li>
                <i className="icon-phone pe-3"></i> +41 61 228 90 40
              </li>
              <li>
                <i className="icon-letter pe-3"></i> info@grid.com.eg
              </li>
            </ul>
          </div>
          <div className="contact-us">
            <h5 className="text-light mb-4 title">Useful Links</h5>
            <ul className="list-unstyled text lh-lg">
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="src/components/CommonComponents/Footer/Footer">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <i className="icon-a pe-3"></i>
            <i className="icon-a- pe-3"></i>
            <i className="icon-a-regular pe-3"></i>

            <button onClick={toggleTheme} className="night-mode-button">
              <i className="icon-halfcircle"></i>
            </button>
            <div className="copyright2">
              &copy; 2022 GRID . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
