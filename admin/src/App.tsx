import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import OnBoarding from "./pages/onBoarding/page";
import Layout from "./pages/layout/Pannel";
import ThemeAndLook from "./pages/themeAndLook/page";
import Product from "./pages/product/page";

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
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
