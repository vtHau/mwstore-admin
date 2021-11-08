import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { authToken } from "./../actions/action";
import { Route, Switch, Redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { path } from "./../constants/path";
import AuthLoading from "./../components/Loading/AuthLoading";

function AuthLayout() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  console.log("da chay");

  useEffect(() => {
    // dispatch(authToken(setIsLoading));
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
  }, [dispatch]);

  if (!isLoading) {
    return <AuthLoading />;
  }
  if (isLoading && true) {
    return <Redirect to={path.LOGIN} />;
  }
  return <MainLayout />;
}

export default AuthLayout;
