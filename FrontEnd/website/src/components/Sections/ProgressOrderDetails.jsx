import React, { useRef, useState } from "react";
import { ButtonWithBorderFullWidth } from "../UI/Buttons";
import { productsData } from "../../utils/MockData";
import { useNavigate } from "react-router-dom";

function ProgressOrderDetails({ setDisplayId }) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const innerDetailRef = useRef(null);
  const product = productsData[0];

  const handleClick = (e) => {
    if (innerDetailRef.current && !innerDetailRef.current.contains(e.target)) {
      setDisplayId(null);
    }
  };

  const handleReturn = () => {
    setModal(!modal);
  };

  return (
    <div
      className="mt-16 pt-8 px-6 z-20 relative flex justify-center"
      onClick={handleClick}
    >
      <div
        className="innerDetail w-full bg-[#e5e7eb] py-3 px-3 md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-1/3 rounded-md lg:py-4 lg:px-5 border-[1px] border-color-secondary/50"
        ref={innerDetailRef}
      >
        <h1 className="text-lg md:text-xl tracking-normal font-medium  flex justify-between items-center mb-3 md:mb-5">
          Order Details
          <span
            className="text-sm md:text-base underline cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            close
          </span>
        </h1>
        <div className="product-details flex gap-4">
          <div className="prod-img w-1/3 md:w-1/4">
            <img
              src={product.img}
              alt="img"
              width="100"
              className="w-full object-cover h-24 object-top md:h-32 rounded-md"
            />
          </div>
          <div className="prod-details w-2/3 text-sm relative font-light md:w-3/4 md:text-base">
            <p className="prod-title">{product.title}</p>
            <p className="prod-price py-1 font-semibold">
              INR <span className="text-color-secondary">{product.price}</span>
            </p>
            <p className="prod-status text-xs md:text-sm">Status: Delivered</p>
            <p
              className="prod-return absolute underline bottom-2 left-0 cursor-pointer"
              onClick={handleReturn}
            >
              cancel
            </p>
          </div>
        </div>
        <div className="shipping-details mt-8 md:text-lg">
          <p className="title tracking-wide font-semibold">Shipping Details</p>
          <div className="shipping-address mt-2 border-2 border-color-subPrimary/70 rounded-lg p-2 text-sm md:text-base md:px-4 py-2">
            Aditya, Riddhi Apt, Nalasapara West, Shriprastha complex, Near fun
            fiesta, Thane, Maharashtra 401203, Adityamishra57608@gmail.com,
            917276000996
          </div>
        </div>
        <div className="order-summary mt-8">
          <p className="title tracking-wide font-semibold md:text-lg">
            Order Summary
          </p>
          <div className="prices flex justify-between text-sm md:text-base">
            <p>Item Total(1 Item)</p>
            <p>INR {product.price}</p>
          </div>
          <div className="prices flex justify-between text-sm md:text-base">
            <p>Discount</p>
            <p>INR {product.price - product.priceDropped}</p>
          </div>
          <div className="prices flex justify-between text-sm md:text-base">
            <p>Shipping</p>
            <p>INR {product.shipping}</p>
          </div>
          <div className="border-t-2 border-slate-500/50 my-1 md:my-2"></div>
          <div className="prices flex justify-between text-sm md:text-base">
            <p className="flex flex-col">
              Grand Total{" "}
              <span className="text-xs opacity-60">(Inclusive of Taxes)</span>
            </p>
            <p>INR {product.priceDropped + product.shipping}</p>
          </div>
        </div>
        <div className="download-invoice mt-8">
          <ButtonWithBorderFullWidth
            value={"Download"}
            className="pointer-events-none opacity-30"
          />
        </div>
      </div>
      {modal && (
        <div className="returnPopup absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center orderDetail ">
          <div className="inner-returnPopup  bg-[#e9e7e7] w-4/5 h-40 px-4 py-3 rounded-lg md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 ">
            <h1 className="text-xl tracking-wide font-light flex justify-between items-center opacity-70">
              Confirm Cancel
              <span
                className="underline cursor-pointer text-sm"
                onClick={handleReturn}
              >
                close
              </span>
            </h1>
            {confirm ? (
              <p className="h-2/3 justify-center flex items-center opacity-70 text-color-secondary font-semibold tracking-wide ">
                Your cancel request has been accepted!!
              </p>
            ) : (
              <>
                <p className="mt-2 opacity-70">
                  Are you sure you want to cancel this product?
                </p>
                <ButtonWithBorderFullWidth
                  value={"Confirm"}
                  className={"mt-4 3xl:h-[2.5rem] 3xl:mt-6"}
                  onClick={() => setConfirm(!confirm)}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgressOrderDetails;
