import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import appStore from "./store/appStore";
import Profile from "./pages/Profile";
import ProfileEditForm from "./components/profile/ProfileEditForm";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";
import NotFound from "./pages/NotFound";
import Home from "./components/Home";

const router = createBrowserRouter([
  // 🌐 Public routes (NO App layout)
  {
    path: "/",
    element: <Home />, // your DevTinder landing page
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },

  // 🔒 App routes (WITH App layout)
  {
    path: "app",
    element: <App />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <ProfileEditForm />,
      },
      {
        path: "connections",
        element: <Connections />,
      },
      {
        path: "requests",
        element: <Requests />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
