import { Spin } from "antd";
import React, { Suspense, useEffect, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { flattenTreeArray } from "../../commom/function";
import Breadcrumbs from "../../component/breadcrumb/Breadcrumbs";
import routers from "../../routers/routers";
import { useAppSelector } from "../../store/reduxHook";
import { SiderBarStore } from "../../store/sider/sider";
import { ContentLoading } from "./contentWapperStyle";
import { handleAutoWidth, mapRoutersPage } from "./handleContentWapper";

export default function ContentWapper() {
  const { collapsed } = useAppSelector(SiderBarStore);
  const routersSider = useMemo(
    () =>
      mapRoutersPage(flattenTreeArray(routers)),
    []
  );

  useEffect(() => {
    handleAutoWidth(collapsed);
  }, [collapsed]);

  return (
    <>
      <Breadcrumbs />
      <Suspense
        fallback={
          <ContentLoading className="loading">
            <Spin tip="Loading, please..." />
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
