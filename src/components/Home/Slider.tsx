import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "liner",
  };
  return (
    <div className="backdrop-blur-[10px] bg-slate-400 w-full hover:bg-transparent hover:border hover:border-white border border-transparent p-7 rounded-[26px] h-max min-h-max max-h-max transition duration-[220ms] ease-linear">
      <div className="slider-container xl:w-[230px] lg:w-[230px] md:w-[230px] w-full cursor-pointer">
        <Slider {...settings}>
          <div className="h-[230px] rounded-md bg-blue-500 flex items-center justify-center">
            <h3 className="text-white text-3xl">Slide 1</h3>
          </div>
          <div className="h-[230px] rounded-md bg-red-500 flex items-center justify-center">
            <h3 className="text-white text-3xl">Slide 2</h3>
          </div>
          <div className="h-[230px] rounded-md bg-green-500 flex items-center justify-center">
            <h3 className="text-white text-3xl">Slide 3</h3>
          </div>
          <div className="h-[230px] rounded-md bg-yellow-500 flex items-center justify-center">
            <h3 className="text-white text-3xl">Slide 4</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
