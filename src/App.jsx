import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";

const App = () => {
  return (
    <div className="max-md:px-4 ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
