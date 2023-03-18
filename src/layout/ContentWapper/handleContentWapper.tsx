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
