import React from "react";

import slider1 from "./../../../../assets/images/banner/banner.jpg";
import slider2 from "./../../../../assets/images/banner/banner2.jpg";
import slider3 from "./../../../../assets/images/banner/banner4.jpg";
function Banner() {
  return (
    <section className="banner-section">
      <div className="swiper-container banner-slider">
        <div className="swiper-wrapper">
          {/* slider item */}
          <div
            className="swiper-slide"
            style={{ backgroundImage: `url(${slider1})` }}
          >
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>
                    Tuneup Your Car <br /> to Next Level
                  </h1>
                  <div className="text">
                    We believe in providing top quality workmanship and are{" "}
                    <br />
                    so confident in our level of service that we back it up{" "}
                    <br /> with a good quality.
                  </div>
                  <div className="link-box">
                    <a
                      href="/services"
                      className="theme-btn btn-style-one"
                    >
                      <span>
                        view all services
                        <i className="flaticon-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* slider item */}

          <div
            className="swiper-slide"
            style={{ backgroundImage: `url(${slider2})` }}
          >
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>
                    Highly Skilled <br /> Cretified Engineers
                  </h1>
                  <div className="text">
                    We believe in providing top quality workmanship and are{" "}
                    <br />
                    so confident in our level of service that we back it up{" "}
                    <br /> with a good quality.
                  </div>
                  <div className="link-box">
                    <a
                      href="/services"
                      className="theme-btn btn-style-one"
                    >
                      <span>
                        view all services
                        <i className="flaticon-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider item */}
          <div
            className="swiper-slide"
            style={{ backgroundImage: `url(${slider3})` }}
          >
            <div className="content-outer">
              <div className="content-box">
                <div className="inner">
                  <h1>
                    Modern Workshop <br /> For Car Repair
                  </h1>
                  <div className="text">
                    We believe in providing top quality workmanship and are{" "}
                    <br />
                    so confident in our level of service that we back it up{" "}
                    <br /> with a good quality.
                  </div>
                  <div className="link-box">
                    <a
                      href="/services"
                      className="theme-btn btn-style-one"
                    >
                      <span>
                        view all services
                        <i className="flaticon-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-slider-nav">
                <div className="banner-slider-control banner-slider-button-prev"><span><i
                            className="far fa-angle-left"></i></span></div>
                <div className="banner-slider-control banner-slider-button-next"><span><i
                            className="far fa-angle-right"></i></span> </div>
            </div>
    </section>
  );
}

export default Banner;
