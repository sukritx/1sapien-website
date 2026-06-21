import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Services",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Smart Website", path: "/products/smart-website", newTab: false, description: "Taylor-made website optimized for conversions" },
      { id: 2, title: "Local Rank Up", path: "/products/local-rank-up", newTab: false, description: "Dominate local search results" },
      { id: 3, title: "Reviews", path: "/products/reviews", newTab: false, description: "Get more 5-star reviews and manage reputation" },
    ],
  },
  {
    id: 2,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 3,
    title: "Our Work",
    path: "/our-work",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
    {
      id: 5,
      title: "About",
      path: undefined,
      newTab: false,
      submenu: [
        { id: 1, title: "About Us", path: "/about", newTab: false, description: "Get to know 1Sapien" },
        { id: 2, title: "Partners", path: "/partners", newTab: false, description: "Meet our partners" },
      ],
    },
];
export default menuData;
