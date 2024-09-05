import React from "react";
import Home from "@/components/Home/page";

interface ItemType {
  id: number;
  element: React.FC | string;
}

const mainPageData: ItemType[] = [
  {
    id: 1,
    element: Home,
  },
  {
    id: 2,
    element: "Cards",
  },
  // {
  //   id: 3,
  //   element: "Logo",
  // },
  // {
  //   id: 4,
  //   element: "Filter",
  // },
  // {
  //   id: 5,
  //   element: "Time",
  // },
  // {
  //   id: 6,
  //   element: "Calendar",
  // },
];

export default mainPageData;
