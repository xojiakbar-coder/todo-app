interface NavbarItemType {
  id: number;
  title: string;
  href: string;
}

const navbarItems: NavbarItemType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Todos",
    href: "/todos",
  },
  {
    id: 3,
    title: "About us",
    href: "",
  },
];

export default navbarItems;
