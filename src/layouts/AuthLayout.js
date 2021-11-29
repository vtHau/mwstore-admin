import React from "react";
import useAuth from "./../hooks/useAuth";
import { Redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { path } from "./../constants/path";
import AuthLoading from "./../components/Loading/AuthLoading";

function AuthLayout(props) {
  const { children } = props;
  const [isAuth, isLoading] = useAuth();

  if (!isLoading) {
    return <AuthLoading />;
  }

  if (isLoading && !isAuth) {
    return <Redirect to={path.SIGN_IN} />;
  }
  return <MainLayout>{children}</MainLayout>;
}

export default AuthLayout;
