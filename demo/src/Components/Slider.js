import React, { Component } from "react";
import Slider from "react-slick";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <a href="#" className="card-container">
            <p className="card-title">Firm News</p>
            <h6 className="card-description">
              Another Year - Still 'Most Feared'
            </h6>
          </a>
        </div>
        <div>
          <a href="#">
            <p className="card-title">Awards</p>
            <h6 className="card-description">
              Five Quinn Emanuel Attorneys Named 2023 “Rising Stars” by Law360{" "}
            </h6>
          </a>{" "}
        </div>
        <div>
          <a href="#">
            <p className="card-title">Firm News</p>
            <h6 className="card-description">
              Another Year - Still 'Most Feared'
            </h6>
          </a>{" "}
        </div>
        <div>
          <a href="#">
            <p className="card-title">Awards</p>
            <h6 className="card-description">
              Law360 Selects Five Quinn Emanuel Partners as “2023 MVPs”{" "}
            </h6>
          </a>{" "}
        </div>
        <div>
          <a href="#">
            <p className="card-title">Awards</p>
            <h6 className="card-description">
              Quinn Emanuel Receives Top Rankings in Legal 500 UK 2024{" "}
            </h6>
          </a>{" "}
        </div>
        <div>
          <a href="#">
            <p className="card-title">Awards</p>
            <h6 className="card-description">
              Quinn Emanuel Named 2023 "Litigation Department of the Year" by
              The American Lawyer{" "}
            </h6>
          </a>{" "}
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
