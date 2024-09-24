import React from "react";

function Testimonial() {
  return (
    <div className="lg:px-32 xl:px-72 2xl:px-96">
      <div className="h4 text-xl tracking-widest flex justify-center mt-16 mb-7 uppercase 4xl:text-2xl">
        What People Think
      </div>
      <iframe
        className="xl:h-[500px]"
        height="400px"
        id="testimonialto-younggeezer-tag-all-light-animated"
        src="https://embed-v2.testimonial.to/w/younggeezer?animated=on&theme=light&shadowColor=ffffff&speed=1&hideDate=on&tag=all"
        frameborder="0"
        scrolling="no"
        width="100%"
      ></iframe>
    </div>
  );
}

export default Testimonial;
