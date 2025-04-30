import React from "react";
import "./pageHeader.css";
import { Link } from "react-router-dom";

function PageHeader({ pageTitle }) {
  return (
    <div>
      <section className="page-title">
        <div className="auto-container">
          <h2>{pageTitle}</h2>
          <ul className="page-breadcrumb">
            {/* <li><a href="/">home</a></li> */}
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>{pageTitle}</li>
          </ul>
        </div>
        {/* <h1 data-parallax='{"x": 50}'>ABE GARAGE</h1> */}
      </section>
    </div>
  );
}

export default PageHeader;
