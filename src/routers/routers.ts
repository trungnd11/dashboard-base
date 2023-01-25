import { lazy } from "react";
import { generateId } from "../commom/ulties";
import { RoutersModel } from "../model/routersModel/RoutersModel";

const Home = lazy(async () => await import("../pages/home/Home"));
const FormInstance = lazy(async () => await import("../pages/form/FormInstance"));

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
        element: FormInstance,
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
