import React from "react";

function BagPricing() {
  return (
    <div className="px-6 pt-6 pb-2">
      <div className="summaryHeading">
        <h2 className="text-lg font-semibold opacity-80">Order Summary</h2>
      </div>
      <div className="summary mt-2">
        <p className="flex justify-between">
          Item Total (2 Items) <span>INR 2000</span>
        </p>
        <p className="flex justify-between mt-1 border-b-2 border-color-secondary/5 pb-3 ">
          Shipping <span>INR 200</span>
        </p>

        <h2 className="flex justify-between mt-2 text-lg font-semibold">
          <span className="flex flex-col relative">
            Grand Total{" "}
            <span className="text-xs absolute bottom-[-50%] w-[130%] opacity-70">
              (Inclusive of Taxes)
            </span>
          </span>{" "}
          <span className="tracking-tight">INR 2200</span>
        </h2>
      </div>
    </div>
  );
}

export default BagPricing;
