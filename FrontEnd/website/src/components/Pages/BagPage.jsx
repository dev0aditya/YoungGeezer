import React from "react";
import BagItem from "../Sections/BagItem";
import BagPricing from "../Sections/BagPricing";
import { DefaultButtonG } from "../UI/Buttons";

function BagPage() {
  return (
    <>
      <div className="bagHeading mt-[4.5rem] flex justify-start px-6 py-5 drop-shadow-2xl border-b-2 border-color-secondary/5 md:mb-5">
        <h1 className="text-2xl text-color-secondary tracking-normal font-medium xl:px-10">
          Shopping Bag
        </h1>
      </div>
      <div className="bagContent md:flex justify-center">
        <div className="bagItems border-b-2 border-color-secondary/5 p-6 md:w-1/2 md:border-r-2 md:border-b-0 lg:w-2/5 xl:w-2/6">
          <BagItem />
        </div>
        <div className="bagPricing md:w-1/2 lg:w-1/3 md:sticky md:top-14 md:h-64">
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
