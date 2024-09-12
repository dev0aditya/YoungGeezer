import React from "react";
import Slider from "react-slick";
import DeliveryInfo from "./DeliveryInfo";
import { productDescription } from "../../utils/MockData";
import { DefaultButtonG } from "../UI/Buttons";

function ProductDetails() {
  const prodImg = [
    "https://krazedculture.com/cdn/shop/files/10.png?v=1717582986&width=493",
    "https://krazedculture.com/cdn/shop/files/7.png?v=1717582986&width=493",
    "https://krazedculture.com/cdn/shop/files/6_bec68bac-f57c-4043-be85-fd5f4c4feaec.png?v=1717582986&width=493",
    "https://krazedculture.com/cdn/shop/files/9.png?v=1717582986&width=493",
  ];

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 300,
    autoplaySpeed: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2600,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className="xl:flex xl:px-16 mt-20">
      <div className="productImgContainer xl:w-[55%]">
        <Slider
          {...settings}
          className="productSlider xl:flex xl:flex-wrap gap-3"
        >
          {prodImg.map((img, index) => (
            <img
              src={img}
              key={index}
              className="Image xl:w-[49%] rounded-lg"
            />
          ))}
        </Slider>
      </div>
      <div className="productDataContainer mt-14 xl:w-[45%] xl:flex xl:flex-col xl:items-center xl:px-14">
        <div className="productDetails text-center">
          <h2 className="text-2xl font-semibold 3xl:text-3xl">
            Lorem, ipsum ipsum dolor.
          </h2>
          <h3 className="text-xl mt-2 font-light 3xl:text-2xl">INR 999</h3>
          <h6 className="text-sm opacity-50 3xl:text-base">
            (incl. of all taxes)
          </h6>
        </div>
        <div className="productSizes text-center mt-6">
          <p className="text-lg tracking-widest opacity-90 text-color-secondary 3xl:text-xl">
            Select a size
          </p>
          <ul className="flex justify-center items-center mt-3 3xl:mt-4">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>
        {/* <div className="productQuantity text-center mt-6">
          <span className="add">+</span>
          <span className="quantity">
            <input type="text" />
          </span>
          <span className="remove">-</span>
        </div> */}

        <div className="buyingOptions flex mt-8 items-center xl:w-full 3xl:mt-10">
          <DefaultButtonG value={"Buy Now"} />
          <DefaultButtonG value={"Add to Bag"} />
        </div>

        <div className="productDescription px-6 w-full opacity-70 xl:mt-12 xl:text-base mt-10 3xl:text-lg">
          <h3 className="font-semibold">Description</h3>
          <ul>
            {Object.entries(productDescription).map(([key, value], index) => (
              <li key={index}>
                {key}:{" "}
                <span className="font-light tracking-wide">
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="deliveryInfo mt-10 xl:w-full xl:mt-16">
          <DeliveryInfo />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
