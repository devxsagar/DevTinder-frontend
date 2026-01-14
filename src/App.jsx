import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

const App = () => {
  return (
    <div className="max-md:px-4 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
