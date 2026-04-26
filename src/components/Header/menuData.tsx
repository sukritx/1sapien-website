import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Systems & Features", path: undefined, newTab: false, isTitle: true },
      { id: 2, title: "Functional Website", path: "/products/functional-website", newTab: false },
      { id: 3, title: "Missed Call Text Back", path: "/products/missed-call-text-back", newTab: false },
      { id: 4, title: "Business Phone", path: "/products/business-phone", newTab: false },
      { id: 5, title: "Local SEO", path: "/products/local-seo", newTab: false },
      { id: 6, title: "5-Star Magic Review Funnel", path: "/products/5-star-magic-review-funnel", newTab: false },
      { id: 7, title: "One-Click Marketing Campaigns", path: "/products/one-click-marketing-campaigns", newTab: false },
      { id: 8, title: "Automated Lead Follow Up", path: "/products/automated-lead-follow-up", newTab: false },
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
      { id: 1, title: "About Us", path: "/about-us", newTab: false },
      { id: 2, title: "Partners", path: "/partners", newTab: false },
    ],
  },
];
export default menuData;
