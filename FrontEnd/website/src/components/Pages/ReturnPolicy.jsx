import React, { useState } from "react";
import { exchangePolicy } from "../../utils/MockData";
import Accordian from "../Sections/Accordian";

function ReturnPolicy() {
  const [openIndex, setOpenIndex] = useState(0);

  const accClickHandler = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center mt-16 px-6 md:px-28 lg:px-32 lg:mt-24 xl:px-56 2xl:px-72 3xl:px-96 text-justify">
      <h1 className="text-2xl text-color-secondary tracking-normal font-medium py-5">
        Privacy Policy
      </h1>
      {exchangePolicy?.exchangePolicy.map((accordianData, index) => (
        <Accordian
          key={index}
          isOpen={openIndex === index}
          onClick={() => accClickHandler(index)}
          title={accordianData.title}
          content={accordianData.content}
        />
      ))}
    </div>
  );
}

export default ReturnPolicy;
