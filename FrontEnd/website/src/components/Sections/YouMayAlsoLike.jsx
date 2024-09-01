import React from "react";
import Slider from "react-slick";
import TextLimiter from "../UI/TextLimiter";
import { productsData } from "../../utils/MockData";

function YouMayAlsoLike() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5.6,
    slidesToScroll: 4,
    autoplay: false,
    speed: 300,
    autoplaySpeed: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5.1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="youmayalsolike mt-20 px-6 xl:px-16 3xl:mt-36">
      <h2 className="h4 text-xl tracking-widest mt-14 mb-7 uppercase 4xl:text-2xl">
        You May Also Like
      </h2>
      <div className="alsoLikeSlider">
        <Slider {...settings} className="arrivalSlider">
          {productsData.map((product, index) => (
            <div key={index} className="pr-3 4xl:pr-7">
              <img src={product.img} alt={product.alt} />
              <div className="arrivalData">
                <div className="heading text-xs mt-2 font-normal 4xl:text-lg">
                  <TextLimiter
                    text={product.desc}
                    mobileLimit={40}
                    desktopLimit={60}
                  />
                </div>
                <div className="price mt-1 text-base font-medium 4xl:text-xl text-[#006d5b]">
                  INR {product.price}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;
