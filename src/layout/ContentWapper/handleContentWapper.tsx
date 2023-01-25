import React from "react";
import { Route } from "react-router-dom";
import { RoutersModel } from "../../model/routersModel/RoutersModel";

export const mapRouters: any = (routes: RoutersModel[]) => {
  return routes.map((item) =>
    !item.children
      ? (
        <Route key= { item.id } path = { item.path } element = {< item.element />} />
        )
      : (
          mapRouters(item.children)
        )
  );
};

export const mapRoutersPage: any = (routes: RoutersModel[]) =>
  routes.map((item) => (
    <Route key= { item.id } path = { item.path } element = {< item.element />} />
  ));

export const handleAutoWidth = (collapsed: boolean) => {
  const sider = document.getElementById("sider");
  const content = document.getElementById("content");
  const trigger = document.getElementById("trigger");
  const breadscumb = document.getElementById("breadsumb-wapper");
  const rootWidth = window.innerWidth;
  if (sider && content && trigger && breadscumb) {
    new ResizeObserver((entries) => {
      trigger.style.width = `${sider.offsetWidth}px`;
      breadscumb.style.width = `${rootWidth - sider.offsetWidth}px`;
      content.style.marginLeft = `${sider.offsetWidth}px`;
      content.style.marginTop = `${breadscumb.offsetHeight + 64}px`;
      if (collapsed) {
        trigger.style.justifyContent = "center";
      }
    }).observe(sider);
  }
};
