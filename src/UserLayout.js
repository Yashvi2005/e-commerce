import React from "react";
import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};
