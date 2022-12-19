import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


export function ProtectedRoutes() {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }
  return user ? <Outlet /> : <Navigate to="/" />;
}