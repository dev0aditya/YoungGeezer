import Slider from "react-slick";
import TextLimiter from "../UI/TextLimiter";
import { productsData } from "../../utils/MockData";

function NewArrival() {
  const newest = productsData.slice(-4);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5.6,
    slidesToScroll: 4,
    autoplay: false,
    speed: 300,
    autoplaySpeed: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5.1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="h4 text-xl tracking-widest flex justify-center mt-14 mb-7 uppercase 4xl:text-2xl">
        New Arrival‼️
      </div>
      <div className="arrivalContainer mb-7 px-4 4xl:px-16 xl:px-16 lg:px-10 md:px-6">
        <Slider {...settings} className="arrivalSlider">
          {newest.map((product, index) => (
            <div key={index} className="pr-3 4xl:pr-7">
              <img src={product.img} alt={product.alt} />
              <div className="arrivalData">
                <div className="heading text-xs mt-2 font-normal 4xl:text-lg">
                  <TextLimiter
                    text={product.desc}
                    mobileLimit={40}
                    desktopLimit={60}
                  />
                </div>
                <div className="price mt-1 text-base font-medium 4xl:text-xl text-[#006d5b]">
                  INR {product.price}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default NewArrival;
