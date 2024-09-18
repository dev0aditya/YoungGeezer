import React from "react";
import BagItem from "../Sections/BagItem";
import BagPricing from "../Sections/BagPricing";
import { DefaultButtonG } from "../UI/Buttons";

function BagPage() {
  return (
    <>
      <div className="bagHeading mt-[4.5rem] flex justify-start px-6 py-5 drop-shadow-2xl border-b-2 border-color-secondary/5">
        <h1 className="text-2xl text-color-secondary tracking-normal font-medium ">
          Shopping Bag
        </h1>
      </div>
      <div className="bagContent">
        <div className="bagItems border-b-2 border-color-secondary/5 p-6">
          <BagItem />
        </div>
        <div className="bagPricing">
          <BagPricing />
        </div>
      </div>
      <div className="checkoutBtn sticky bottom-0 mt-16">
        <DefaultButtonG
          value={"checkout"}
          className={"rounded-none w-full bg-color-secondary/100"}
        />
      </div>
    </>
  );
}

export default BagPage;
