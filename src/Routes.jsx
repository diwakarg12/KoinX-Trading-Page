import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { 
            path: "/", 
            element: <Home /> 
        },
        { 
            path: "/about", 
            element: <About /> 
        },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);


const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
