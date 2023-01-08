import { lazy } from "react";
import { generateId } from "../commom/ulties";
import { RoutersModel } from "../model/routersModel/RoutersModel";

const Home = lazy(async () => await import("../pages/home/Home"));

const routers: RoutersModel[] = [
  {
    id: generateId(),
    icon: "HomeOutlined",
    name: "Home",
    path: "/home",
    element: Home
  },
  {
    id: generateId(),
    icon: "AppstoreAddOutlined",
    name: "Components",
    path: "/components",
    element: Home,
    children: [
      {
        id: generateId(),
        name: "Form",
        path: "/components/form",
        element: Home,
      },
      {
        id: generateId(),
        name: "Table",
        path: "/components/table",
        element: Home,
      }
    ]
  },
];

export default routers;
