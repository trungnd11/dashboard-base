import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/queryClient";
import AuthorizedRouter from "./routers/AuthorizedRouter";
import ProtectedRouter from "./routers/ProtectedRouter";
import { useAppDispatch, useAppSelector } from "./store/reduxHook";
import { getAuthorStore, getLogin, logout } from "./store/author/author";
import { getCookie } from "./commom/cookie";
import { Authenticate } from "./enum/author";

const Container = lazy(async () => await import("./layout/Container/Container"));
const Login = lazy(async () => await import("./pages/login/Login"));

export default function App() {
  const { pathname } = useLocation();
  const author = getCookie(Authenticate.AUTH);
  const dispatch = useAppDispatch();
  const { isAuthorized } = useAppSelector(getAuthorStore);

  useEffect(() => {
    author ? dispatch(getLogin(author)) : dispatch(logout());
  }, [pathname]);

  useEffect(() => {
    isAuthorized ? <Navigate to="/" /> : <Navigate to="/login" />;
  }, [isAuthorized]);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRouter>
                <Login />
              </ProtectedRouter>
            }
          />
          <Route
            path="*" element={
              <AuthorizedRouter>
                <Container />
              </AuthorizedRouter>}
          />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
}
