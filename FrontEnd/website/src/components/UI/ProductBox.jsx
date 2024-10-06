import React from "react";
import { PriceDropPercentage } from "../../utils/priceUtils";
import TextLimiter from "../UI/TextLimiter";

function ProductBox({
  img,
  desc,
  alt,
  price,
  priceDropped,
  title,
  stock,
  className,
}) {
  const percentageDrop = PriceDropPercentage(price, priceDropped);

  const OldPrice = () => (
    <span className="line-through text-sm opacity-60 ml-1">INR {price}</span>
  );

  return (
    <div className={`prodBox ${className} `}>
      <div className="imgBox relative">
        <img src={img} alt={alt} className="rounded-lg" />
        {priceDropped && (
          <div className="sale absolute bottom-2 left-2 bg-color-primary px-2 py-1 text-base rounded-lg text-black opacity-80 font-bold tracking-wide">
            {percentageDrop > 0 && `${percentageDrop.toFixed(0)}% off`}
          </div>
        )}
      </div>
      <div className="dataBox px-2 mt-2">
        <div className="title text-sm">
          <TextLimiter text={title} desktopLimit={25} mobileLimit={17} />
        </div>
        <div className="desc opacity-70 font-light text-xs">
          <TextLimiter text={desc} desktopLimit={35} mobileLimit={20} />
        </div>
        <div className="price mt-1 font-semibold text-[1.05rem] text-color-secondary">
          {priceDropped ? (
            <>
              INR {priceDropped} <OldPrice />
            </>
          ) : (
            `INR ${price}`
          )}
        </div>
        <div className="warning text-xs text-red-400 mt-[-0.2rem]">
          {stock < 15 ? "Only Few Left!" : ""}
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
