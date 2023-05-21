import React from "react";
import "./footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="social-medias">
            <div className="social-medias-icons">
              <a href="https://www.facebook.com/CNMCplatform/about">
                <FaFacebookSquare className="facebook" />
              </a>
              {/* <a href="/">
                <FaTwitterSquare className="twitter" />
              </a>
              <a href="/">
                <FaInstagramSquare className="instagram" />
              </a> */}
            </div>
          </div>
          <div className="row">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="row">
            Copyright © 2023 CNMC - All rights reserved || Designed by Bipul
          </div>
        </div>
      </footer>
    </>
  );
}
