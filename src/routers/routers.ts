import { lazy } from "react";
import { generateId } from "../commom/ulties";
import { RoutersModel } from "../model/routersModel/RoutersModel";

const BankAll = lazy(async () => await import("../pages/bankAll/BankAll"));
const Attribute = lazy(async () => await import("../pages/attribute/Attribute"));
const Instance = lazy(async () => await import("../pages/instance/Instance"));
const Partner = lazy(async () => await import("../pages/partner/Partner"));
const Template = lazy(async () => await import("../pages/template/Template"));
const WhiteList = lazy(async () => await import("../pages/whiteList/WhiteList"));

const routers: RoutersModel[] = [
  {
    id: generateId(),
    icon: "BankOutlined",
    name: "Bannk load all",
    path: "/bank-load-all",
    element: BankAll
  },
  {
    id: generateId(),
    icon: "BankOutlined",
    name: "Attribute",
    path: "/attribute",
    element: Attribute
  },
  {
    id: generateId(),
    icon: "BankOutlined",
    name: "Instance",
    path: "/instance",
    element: Instance
  },
  {
    id: generateId(),
    icon: "BankOutlined",
    name: "Partner",
    path: "/partner",
    element: Partner
  },
  {
    id: generateId(),
    icon: "BankOutlined",
    name: "Template",
    path: "/template",
    element: Template
  },
  {
    id: generateId(),
    icon: "BankOutlined",
    name: "White list",
    path: "/white-list",
    element: WhiteList
  },
];

export default routers;
