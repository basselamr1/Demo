import { React, useState, useEffect } from "react";
import { FirstGifComponent } from "./Gif";
import CenterMode from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    "assets/london.jpg",
    "assets/losangeles.jpg",
    "assets/newyork.jpg",
    "assets/sydney.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [backgroundIndex, backgrounds.length]);

  return (
    <div className="hero-body">
      <div className="background-container">
        <div
          className={`background ${backgroundIndex === 0 ? "fade-out" : ""}`}
        >
          <img
            src={`${backgrounds[backgroundIndex]}`}
            alt="Background"
            className="background-img"
          ></img>
        </div>
      </div>
      <div className="whats-new">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h5>WhAT'S NEW AT QUINN EMANUEL?</h5>
            </div>
          </div>
        </div>
        <CenterMode />
      </div>
    </div>
  );
};
export default Hero;
