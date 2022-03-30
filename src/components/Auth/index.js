import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Auth = ({ auth }) => {
  if (auth.isLoading) return <></>;
  if (!auth.isAuthenticated) return <Outlet />;
  return <Navigate to="/" />;
};

export default Auth;
