import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import sliderItemData from "@/utils/slider";

const SliderComponent: React.FC = () => {
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
    <div className="backdrop-blur-[10px] bg-slate-400 w-full hover:bg-transparent hover:border hover:border-white border border-transparent p-7 rounded-xl h-max min-h-max max-h-max transition duration-[220ms] ease-linear">
      <div className="slider-container xl:w-[280px] lg:w-[280px] md:w-[280px] w-full cursor-pointer">
        <Slider {...settings}>
          {sliderItemData.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.img}
                alt="slider image not found"
                className="w-full h-full rounded-lg"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
