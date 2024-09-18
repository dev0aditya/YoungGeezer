import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

function BagItemControl({ className, value }) {
  const [quantity, setquantity] = useState(value);

  return (
    <div className={`flex justify-between items-center}`}>
      <div
        className={`numberOfItems flex border-2 border-color-secondary w-3/5 rounded-md text-color-secondary ${className}`}
      >
        <button
          className="Increment w-1/5 flex justify-center items-center mx-1 text-sm cursor-pointer"
          onClick={() => quantity < 10 && setquantity(quantity + 1)}
        >
          <FaPlus />
        </button>
        <input
          type="number"
          className="w-3/5 border-x-2 border-color-secondary focus:outline-none text-center font-semibold"
          value={quantity}
        />
        <button
          className="Decrement w-1/5 flex justify-center items-center mx-1 text-sm cursor-pointer"
          onClick={() => quantity > 1 && setquantity(quantity - 1)}
        >
          <FaMinus />
        </button>
      </div>
      <div className="removeItem text-2xl text-red-500">
        <MdDeleteOutline />
      </div>
    </div>
  );
}

export default BagItemControl;
