import React, { useState } from "react";
import { FaSort } from "react-icons/fa";

function ProductSort({ showModal }) {
  return (
    <>
      <div className="sortbtn w-1/2">
        <button
          className="flex w-full border-2 py-3 text-lg font-semibold tracking-wide h-full justify-center items-center bg-[#fcfcfc] border-r-0 uppercase text-slate-950/60 gap-1"
          onClick={showModal}
        >
          <FaSort /> Sort
        </button>
      </div>
    </>
  );
}

export default ProductSort;
