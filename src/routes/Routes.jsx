import { createBrowserRouter } from "react-router-dom";
import OurMenu from "../components/OurMenu";
import MainLayouts from "../layouts/MainLayouts";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
