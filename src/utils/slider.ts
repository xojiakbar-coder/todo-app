import { StaticImageData } from "next/image";
import SliderImage1 from "../../public/assets/images/slider/todo-1.jpg";
import SliderImage2 from "../../public/assets/images/slider/todo-2.jpg";
import SliderImage3 from "../../public/assets/images/slider/todo-3.jpg";
import SliderImage4 from "../../public/assets/images/slider/todo-4.jpg";
import SliderImage5 from "../../public/assets/images/slider/todo-5.jpg";
import SliderImage6 from "../../public/assets/images/slider/todo-6.jpg";

type SliderItemType = {
  id: number;
  img: StaticImageData;
};

const sliderItemData: SliderItemType[] = [
  {
    id: 1,
    img: SliderImage1,
  },
  {
    id: 2,
    img: SliderImage2,
  },
  {
    id: 3,
    img: SliderImage3,
  },
  {
    id: 4,
    img: SliderImage4,
  },
  {
    id: 5,
    img: SliderImage5,
  },
  {
    id: 6,
    img: SliderImage6,
  },
];

export default sliderItemData;
