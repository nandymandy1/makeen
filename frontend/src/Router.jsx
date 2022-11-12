import Dashboard from "@layouts/Dashboard";
import Navbar from "@layouts/partials/Navbar";
import Public from "@layouts/Public";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";
import DashboardPage from "@pages/Dashboard";
import Profile from "@pages/Dashboard/Profile";
import About from "@pages/Public/About";
import Contact from "@pages/Public/Contact";
import Home from "@pages/Public/Home";
import Services from "@pages/Public/Services";
import { createBrowserRouter, Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    // loader: rootLoader,
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Public />,
        children: [
          {
            path: "",
            element: <Home />,
            index: true,
          },
          {
            path: "about-us",
            element: <About />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "contact-us",
            element: <Contact />,
          },
        ],
      },
      {
        path: "auth",
        element: <Public />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      // {
      //   path: "forms",
      //   element: <Dashboard />,
      //   children: [
      //     {
      //       path: "",
      //       element:
      //     },
      //   ],
      // },
    ],
  },
]);

export default router;
