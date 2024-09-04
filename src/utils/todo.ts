interface ItemType {
  id: number;
  element: React.ReactNode;
}

const todoPageData: ItemType[] = [
  {
    id: 1,
    element: "Sidebar",
  },
  {
    id: 2,
    element: "Cards",
  },
  {
    id: 3,
    element: "Logo",
  },
];

export default todoPageData;
