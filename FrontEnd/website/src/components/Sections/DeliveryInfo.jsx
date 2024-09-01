import React from "react";
import { FiTruck } from "react-icons/fi";
import { FaRegThumbsUp } from "react-icons/fa";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

function DeliveryInfo() {
  return (
    <div className="border-2 border-slate-700/10 flex justify-between gap-4 opacity-70 m-1 py-2 rounded-lg xl:py-5 3xl:py-6">
      <div className="deliveryTime flex flex-col justify-center items-center gap-1 w-2/6">
        <FiTruck className="text-3xl opacity-80 3xl:text-[2rem]" />
        <p className="leading-5 text-center px-2 3xl:text-lg 3xl:mt-1">
          Ships in 7 days
        </p>
      </div>
      <div className="productType flex flex-col justify-center items-center gap-1 w-2/6 ">
        <FaRegThumbsUp className="text-2xl opacity-80 3xl:text-[2rem]" />
        <p className="leading-5 3xl:text-lg 3xl:mt-1 text-center">
          Authentic product
        </p>
      </div>
      <div className="returnOpt flex flex-col justify-center items-center gap-1 w-2/6">
        <HiOutlineArrowPathRoundedSquare className="text-3xl opacity-80 3xl:text-[2rem]" />
        <p className="leading-5 3xl:text-lg 3xl:mt-1 text-center">
          7 days return policy
        </p>
      </div>
    </div>
  );
}

export default DeliveryInfo;
