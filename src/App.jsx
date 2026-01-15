import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import appStore from "./store/appStore";
import { Toaster } from "sonner";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="max-md:px-4 z-100 ">
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Provider>
  );
};

export default App;
