import React from "react";
import { MdFilterListAlt } from "react-icons/md";
function ProductFilterBtn() {
  return (
    <div className="filterbtn w-1/2">
      <button
        className="flex w-full border-2 py-3 text-lg font-semibold tracking-wide h-full justify-center items-center bg-[#fcfcfc] uppercase text-slate-950/60 gap-1"
        onClick={() => console.log("What is up")}
      >
        <MdFilterListAlt /> Filter
      </button>
    </div>
  );
}

export default ProductFilterBtn;
