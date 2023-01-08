import { Spin } from "antd";
import React, { Suspense, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { flattenTreeArray } from "../../commom/function";
import routers from "../../routers/routers";
import { mapRoutersPage } from "./handleContentWapper";

export default function ContentWapper() {
  const routersSider = useMemo(
    () =>
      mapRoutersPage(flattenTreeArray(routers)),
    []
  );

  return (
    <>
      <Suspense
        fallback={
          <div className="loading">
            <Spin />
          </div>
        }
      >
        <Routes>
          {routersSider}
          <Route path="/" element={<Navigate to="/bank-load-all" />} />
        </Routes>
      </Suspense>
    </>
  );
}
