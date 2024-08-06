import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Error from "@pages/Error";
import Dashboard from "@pages/Dashboard";
import Cars from "@pages/Cars";
import MainLayout from "@layouts/MainLayout";
import Login from "@pages/Login";
import Settings from "@pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
