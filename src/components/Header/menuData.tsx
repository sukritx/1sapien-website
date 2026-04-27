import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    path: undefined,
    newTab: false,
    submenu: [
      { id: 1, title: "Systems & Features", path: undefined, newTab: false, isTitle: true },
      { id: 2, title: "Functional Website", path: "/products/functional-website", newTab: false, description: "Get a lead-generating Website in just days" },
      { id: 3, title: "Missed Call Text Back", path: "/products/missed-call-text-back", newTab: false, description: "Automatically text back missed calls" },
      { id: 4, title: "Business Phone", path: "/products/business-phone", newTab: false, description: "Separate business and personal" },
      { id: 5, title: "Local SEO", path: "/products/local-seo", newTab: false, description: "Actually get found on Google" },
      { id: 6, title: "5-Star Magic Review Funnel", path: "/products/5-star-magic-review-funnel", newTab: false, description: "Get more 5 star reviews and prevent bad ones" },
      { id: 7, title: "One-Click Marketing Campaigns", path: "/products/one-click-marketing-campaigns", newTab: false, description: "Keep your customers thinking about you" },
      { id: 8, title: "Automated Lead Follow Up", path: "/products/automated-lead-follow-up", newTab: false, description: "Automatically follow up with leads via text" },
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
