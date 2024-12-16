import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // If there is no user, redirect to the page authentication
  if (!user) {
    return <Navigate to="/auth" />;
  }

  // If user is authenticated, render children component
  return children;
};

export default ProtectedRoute;