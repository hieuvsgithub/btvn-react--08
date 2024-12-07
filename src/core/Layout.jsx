// import React from 'react'

import { Routes } from "react-router-dom";
import { publicRoutes } from "../routes/publicRoutes";
import { privateRoutes } from "../routes/privateRoutes";

const Layout = () => {
  return (
    <Routes>
      {publicRoutes}
      {privateRoutes}
    </Routes>
  );
};

export default Layout;
