import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import OnBoarding from "./pages/onBoarding/page";
import Layout from "./pages/layout/Pannel";
import ThemeAndLook from "./pages/themeAndLook/page";
import Product from "./pages/product/page";
import { Toaster } from "@/components/ui/sonner";
import Login from "./pages/login/Login";

const routes = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <ThemeAndLook />,
      },
      {
        path: "/dashboard/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
