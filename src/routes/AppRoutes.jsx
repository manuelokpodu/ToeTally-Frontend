import { Home } from "../pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
import AddToCart from "../components/addToCart/AddToCart";
import ContactUs from "../pages/ContactUs";
import RootLayout from "../layouts/RootLayout";
import AboutUs from "../pages/AboutUs";


export default function AppRoutes() {
    const routes = [
        {
            path: "/",
            name: "Root",
            element:<RootLayout />,

            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/aboutus", 
                    element: <AboutUs/>
                },
                {
                    path: "/addToCart", 
                    element: <AddToCart/>
                },
                {
                    path: "/contact-us", 
                    element:  <ContactUs/>

                },
            ],
        },
        {
            path: "/login",
            element: <Login />

        },
        {
            path: "/signup", 
            element: <SignUp />

        },
    ];

    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
}
