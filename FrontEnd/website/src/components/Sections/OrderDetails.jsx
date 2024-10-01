import React, { useRef } from "react";
import { PriceDropPercentage } from "../../utils/priceUtils";
import { ButtonWithBorderFullWidth } from "../UI/Buttons";
import { usersData, productsData } from "../../utils/MockData";

function OrderDetails({ setDisplayId }) {
  const innerDetailRef = useRef(null);
  const product = productsData[0];

  const handleClick = (e) => {
    if (innerDetailRef.current && !innerDetailRef.current.contains(e.target)) {
      setDisplayId(null);
    }
  };

  return (
    <div className="orderDetail mt-24 mx-6 z-20" onClick={handleClick}>
      <div
        className="innerDetail w-full bg-[#e5e7eb] py-3 px-3"
        ref={innerDetailRef}
      >
        <h1 className="text-lg tracking-normal font-medium  flex justify-between items-center mb-3">
          Order Details
          <span
            className="text-sm underline cursor-pointer"
            onClick={() => setDisplayId(null)}
          >
            close
          </span>
        </h1>
        <div className="product-details flex gap-4">
          <div className="prod-img w-1/3">
            <img
              src={product.img}
              alt="img"
              width="100"
              className="object-cover h-24"
            />
          </div>
          <div className="prod-details w-2/3 text-sm relative font-light">
            <p className="prod-title">{product.title}</p>
            <p className="prod-price py-1 font-semibold">
              INR <span className="text-color-secondary">{product.price}</span>
            </p>
            <p className="prod-status text-xs">Status: Delivered</p>
            <p className="prod-return absolute underline bottom-0 left-0 cursor-pointer">
              return
            </p>
          </div>
        </div>
        <div className="shipping-details mt-8">
          <p className="title tracking-wide font-semibold">Shipping Details</p>
          <div className="shipping-address mt-2 border-2 border-color-subPrimary rounded-lg p-2 text-sm">
            Aditya, Riddhi Apt, Nalasapara West, Shriprastha complex, Near fun
            fiesta, Thane, Maharashtra 401203, Adityamishra57608@gmail.com,
            917276000996
          </div>
        </div>
        <div className="order-summary mt-8">
          <p className="title tracking-wide font-semibold">Order Summary</p>
          <div className="prices flex justify-between text-sm">
            <p>Item Total(1 Item)</p>
            <p>INR {product.price}</p>
          </div>
          <div className="prices flex justify-between text-sm">
            <p>Discount</p>
            <p>INR {product.price - product.priceDropped}</p>
          </div>
          <div className="prices flex justify-between text-sm">
            <p>Shipping</p>
            <p>INR {product.shipping}</p>
          </div>
          <div className="border-t-2 border-slate-500/50 my-1"></div>
          <div className="prices flex justify-between text-sm">
            <p className="flex flex-col">
              Grand Total{" "}
              <span className="text-xs opacity-60">(Inclusive of Taxes)</span>
            </p>
            <p>INR {product.priceDropped + product.shipping}</p>
          </div>
        </div>
        <div className="download-invoice mt-8">
          <ButtonWithBorderFullWidth value={"Download"} />
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
