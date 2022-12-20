import React, { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";


export function ProtectedRoutes() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [])
  return user ? <Outlet /> : <Navigate to="/login" />;
}