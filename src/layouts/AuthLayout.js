import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "./../hooks/useAuth";
import { authToken } from "./../actions/action";
import { Redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { path } from "./../constants/path";
import AuthLoading from "./../components/Loading/AuthLoading";

function AuthLayout() {
  const [isAuth, isLoading] = useAuth();
  // const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.adminReducer.isAuth);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   dispatch(authToken(setIsLoading));
  // }, [dispatch]);

  if (!isLoading) {
    return <AuthLoading />;
  }
  if (isLoading && !isAuth) {
    return <Redirect to={path.SIGN_IN} />;
  }
  return <MainLayout />;
}

export default AuthLayout;
