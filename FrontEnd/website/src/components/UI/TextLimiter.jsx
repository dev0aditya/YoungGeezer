import React, { useEffect, useState } from "react";

function TextLimiter({ text, desktopLimit, mobileLimit }) {
  const [maxLength, setMaxLength] = useState(desktopLimit);

  useEffect(() => {
    const updateMaxLength = () => {
      if (window.innerWidth < 800) {
        setMaxLength(mobileLimit);
      } else {
        setMaxLength(desktopLimit);
      }
    };
    updateMaxLength();
    window.addEventListener("resize", updateMaxLength);
    return () => {
      window.removeEventListener("resize", updateMaxLength);
    };
  }, []);

  function truncateDescription(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <>
      <div>{truncateDescription(text, maxLength)}</div>
    </>
  );
}

export default TextLimiter;
