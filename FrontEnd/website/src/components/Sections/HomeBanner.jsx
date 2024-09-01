import React from "react";
import Slider from "react-slick";
import { homeBannerImgData } from "../../utils/MockData";

function HomeBanner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <Slider {...settings} className="h-screen">
        {homeBannerImgData.map((img, index) => (
          <div key={index}>
            <img
              className="h-screen object-cover w-full pt-14"
              src={img}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default HomeBanner;
