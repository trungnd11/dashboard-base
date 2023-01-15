import { Spin } from "antd";
import React, { Suspense, useEffect, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { flattenTreeArray } from "../../commom/function";
import Breadcrumbs from "../../component/breadcrumb/Breadcrumbs";
import routers from "../../routers/routers";
import { useAppSelector } from "../../store/reduxHook";
import { SiderBarStore } from "../../store/sider/sider";
import { ContentLoading } from "./contentWapperStyle";
import { mapRoutersPage } from "./handleContentWapper";

export default function ContentWapper() {
  const { collapsed } = useAppSelector(SiderBarStore);
  const routersSider = useMemo(
    () =>
      mapRoutersPage(flattenTreeArray(routers)),
    []
  );

  useEffect(() => {
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
  }, [collapsed]);

  return (
    <>
      <Breadcrumbs />
      <Suspense
        fallback={
          <ContentLoading className="loading">
            <Spin />
          </ContentLoading>
        }
      >
        <Routes>
          {routersSider}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </>
  );
}
