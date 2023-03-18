import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../commom/cookie";
import { Authenticate } from "../enum/author";

export default function ProtectedRouter(props: { children: JSX.Element }) {
  const { children } = props;
  const location = useLocation();
  const auth = getCookie(Authenticate.AUTH);

  if (!auth) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
}
