import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import { toast, Toaster } from "sonner";
import { BASE_URL } from "./utils/constants";
import { addUser, removeUser } from "./feature/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    try {
      if (userData) return;

      if (location.pathname !== "/") {
        return;
      }

      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(addUser(res.data.user));
      }
    } catch (err) {
      if (err.response?.status === 401) {
        dispatch(removeUser());
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-xl:px-4 z-100 ">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
