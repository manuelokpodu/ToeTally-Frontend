import { Blog, Cart, Checkout, Home, Shop } from "../pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
import AddToCart from "../components/addToCart/AddToCart";
import ContactUs from "../pages/ContactUs";
import RootLayout from "../layouts/RootLayout";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import OrderConfirmation from "../pages/OrderConfirmation";

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <RootLayout />, 
      children: [
        { path: "/", element: <Home /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/addToCart/:productId", element: <AddToCart /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/cart", element: <Cart /> },
        { path: "/blog", element: <Blog /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/orderconfirmation", element: <OrderConfirmation /> },
        {
          path: "/shop",
          element: <Shop/>
        }
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },

    { path: "*", element: <NotFound /> },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
