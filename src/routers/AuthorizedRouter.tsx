import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../commom/cookie";
import { Authenticate } from "../enum/author";

export default function AuthorizedRouter(props: { children: JSX.Element }) {
  const { children } = props;
  const auth = getCookie(Authenticate.AUTH);

  if (auth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
