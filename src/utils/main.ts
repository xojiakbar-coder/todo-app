interface ItemType {
  id: number;
  element: React.ReactNode;
}

const mainPageData: ItemType[] = [
  {
    id: 1,
    element: "Hello",
  },
  {
    id: 2,
    element: "Cards",
  },
  {
    id: 3,
    element: "Logo",
  },
  {
    id: 4,
    element: "Filter",
  },
  {
    id: 5,
    element: "Time",
  },
  {
    id: 6,
    element: "Calendar",
  },
];

export default mainPageData;
