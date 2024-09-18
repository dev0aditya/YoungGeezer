import React, { useRef, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function Accordian({ title, content, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(
        isOpen ? `${contentRef.current.scrollHeight + 10}px` : "0px"
      );
    }
  }, [isOpen]);

  return (
    <div className="accordian" onClick={onClick}>
      <h3>
        {title}
        <span
          className={`transform ${
            isOpen ? "rotate-180" : ""
          } transition-transform duration-300`}
        >
          <IoIosArrowUp />
        </span>
      </h3>
      <div
        ref={contentRef}
        className={`accordianData overflow-hidden transition-all duration-500 ${
          isOpen
            ? "mt-1 pt-1 lg:mt-2 lg:pt-2 border-t-2 border-color-secondary border-opacity-10"
            : ""
        }`}
        style={{
          maxHeight: maxHeight,
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Accordian;
