import React from "react";

function FilterCheckbox({ textContent, className }) {
  return (
    <div
      className={`color flex justify-between items-center xl:mb-1 ${className}`}
    >
      <p className="opacity-70 xl:text-lg">{textContent}</p>
      <label className="-mb-2">
        <input type="checkbox" />
        <span className="checkbox"></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
