import React from "react";
import HomeBanner from "../Sections/HomeBanner";
import NewArrival from "../Sections/NewArrival";
import ProductVideoHomePage from "../Sections/ProductVideoHomePage";
import Testimonial from "../Sections/Testimonial";

function HomePage() {
  return (
    <>
      <HomeBanner />
      <NewArrival />
      <ProductVideoHomePage />
      <Testimonial />
    </>
  );
}

export default HomePage;
