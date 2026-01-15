import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import { toast, Toaster } from "sonner";
import { BASE_URL } from "./utils/constants";
import { addUser } from "./feature/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    try {
      if (userData) return;

      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(addUser(res.data.user));
      }
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");

        toast.info("Session expired", {
          description: "Please log in again to continue",
          duration: 3000,
        });
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-md:px-4 z-100 ">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
