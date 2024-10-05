import React from "react";
import ReactPlayer from "react-player";

function ProductVideoHomePage() {
  return (
    <>
      <div className="h4 text-xl tracking-widest flex justify-center mt-20 mb-7 uppercase 4xl:text-2xl">
        Know what u are buying
      </div>
      <div className="vidHomePage w-full h-[50vh] md:h-[70vh] overflow-hidden flex justify-center items-center">
        <ReactPlayer
          width="100%"
          height="150%"
          // url="https://www.youtube.com/watch?v=LXb3EKWsInQ&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0"
          url="https://www.youtube.com/watch?v=9Pbe4DyMQYw&start=2&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0"
          muted={true}
        />
      </div>
    </>
  );
}

export default ProductVideoHomePage;
