import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../pages/error/Error404";
import Home from "../pages/home/Home";
import DefaultLayout from "../components/layout/DefaultLayout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />

      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
