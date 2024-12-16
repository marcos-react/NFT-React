import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import LoginFormPage from "./pages/LoginFormPage";
import RegisterFormPage from "./pages/RegisterFormPage";
import ActivityPage from "./pages/ActivityPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { NewItemsProvider } from "./Context/NewItemsContext";
import { AuthProvider } from "./Context/AuthContext"; // Import AuthProvider

const App = () => {
  return (
    <AuthProvider> {/* AuthProvider */}
      <NewItemsProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<WelcomePage />} />

            {/* Route login */}
            <Route path="/login" element={<LoginFormPage />} />

            {/* Route register */}
            <Route path="/register" element={<RegisterFormPage />} />

            {/* Route auth */}
            <Route path="/auth" element={<AuthPage />} />

            {/* Protected routes activity */}
            <Route
              path="/activity"
              element={
                <ProtectedRoute>
                  <ActivityPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </NewItemsProvider>
    </AuthProvider>
  );
};

export default App;

