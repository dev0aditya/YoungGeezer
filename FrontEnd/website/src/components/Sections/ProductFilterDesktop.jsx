import React from "react";
import FilterCheckbox from "../UI/FilterCheckbox";

function ProductFilterDesktop() {
  return (
    <div className="filterModalDesktop relative bg-[#dedfdc] rounded-lg">
      <div className="absolute -top-6 px-1 flex justify-between w-full  text-sm xl:text-base font-semibold tracking-wide items-center">
        <h1 className="opacity-80">Filter</h1>
        <span className="hover:underline opacity-30 hover:opacity-50 text-sm">
          clear
        </span>
      </div>
      <div className="filterContainer px-3 py-2">
        <div className="colorFilter">
          <h2 className="text-[#fcfcfc] font-semibold tracking-wide text-sm xl:text-base mb-1">
            Color
          </h2>
          <FilterCheckbox textContent={"Black"} />
          <FilterCheckbox textContent={"Grey"} />
          <FilterCheckbox textContent={"White"} />
          <FilterCheckbox textContent={"Yellow"} />
          <FilterCheckbox textContent={"Green"} />
          <FilterCheckbox textContent={"Blue"} />
          <FilterCheckbox textContent={"Purple"} />
          <FilterCheckbox textContent={"Brown"} />
        </div>
        <div className="priceFilter">
          <h2 className="text-[#fcfcfc] font-semibold tracking-wide text-sm mt-3 xl:text-base xl:mb-1">
            Price
          </h2>
          <div className="flex justify-between mb-2 xl:text-lg">
            <label className="opacity-70">From:</label>
            <input
              type="number"
              className="w-1/2 rounded-sm focus:outline-none bg-[#fcfcfc] border-2 border-[#006d5b]/80 text-center text-sm h-7 px-1 xl:text-base"
            />
          </div>
          <div className="flex justify-between xl:text-lg">
            <label className="opacity-70">To:</label>
            <input
              type="number"
              className="w-1/2 rounded-sm focus:outline-none bg-[#fcfcfc] border-2 border-[#006d5b]/80 text-center text-sm h-7 px-1 xl:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilterDesktop;
