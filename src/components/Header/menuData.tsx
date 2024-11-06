import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    available:true
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    available:true,

    submenu: [
      {
        id: 41,
        title: "Custom Software",
        path: "/about",
        newTab: false,
    available:false

      },
     
      {
        id: 41,
        title: "SEO optumization",
        path: "/about",
        newTab: false,
    available:false

      },
      {
        id: 42,
        title: "Mobile App development",
        path: "/mobile-app-development",
        newTab: false,
    available:true

      },
      {
        id: 43,
        title: "Website Development",
        path: "/",
        newTab: false,
        available:false
      },
      {
        id: 44,
        title: "Graphic Designing",
        path: "/-sidebar",
        newTab: false,
    available:false

      },
      {
        id: 45,
        title: "Content Writting",
        path: "/-details",
        newTab: false,
    available:false

      },
     
      {
        id: 48,
        title: "UI/UX Design",
        path: "/error",
        newTab: false,
    available:false

      },
    ],
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
    available:true

  },
  {
    id: 33,
    title: "Blog",
    path: "/",
    newTab: false,
    available:false

  },
  // {
  //   id: 3,
  //   title: "Support",
  //   path: "/contact",
  //   newTab: false,
  // },

];
export default menuData;
