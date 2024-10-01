import React from "react";

function Testimonial() {
  return (
    <div className="testimonial overflow-y-hidden">
      <div className="h4 text-xl tracking-widest flex justify-center mt-16 mb-7 uppercase 4xl:text-2xl lg:px-32 xl:px-72 2xl:px-96">
        What People Think
      </div>
      <div className="flex overflow-y-hidden">
        <div className="w-1/2">
          <iframe
            className="xl:h-[500px]"
            height="400px"
            id="testimonialto-younggeezer-tag-all-dark-animated"
            src="https://embed-v2.testimonial.to/w/younggeezer?animated=on&theme=dark&shadowColor=fcfcfc&speed=1.5&hideDate=on&hideSource&tag=all&disableHoverPause"
            frameborder="0"
            scrolling="no"
            width="100%"
          ></iframe>
        </div>
        <div className="w-1/2">
          <iframe
            className="xl:h-[500px]"
            height="400px"
            id="testimonialto-younggeezer-tag-all-dark-animated"
            src="https://embed-v2.testimonial.to/w/younggeezer?animated=on&theme=dark&shadowColor=fcfcfc&speed=1&hideDate=on&hideSource&tag=all&disableHoverPause"
            frameborder="0"
            scrolling="no"
            width="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
