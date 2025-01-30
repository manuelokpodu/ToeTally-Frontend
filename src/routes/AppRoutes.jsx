import { Home } from "../pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../components";
import Login from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
import AddToCart from "../components/addToCart/AddToCart";
const RootLayout = lazy(() => import("../layouts/RootLayout"));
const AboutUs = lazy(() => import("../pages/AboutUs")); // Lazy load AboutUs page

export default function AppRoutes() {
    const routes = [
        {
            path: "/",
            name: "Root",
            element: (
                <Suspense fallback={<Loader />}>
                    <RootLayout />
                </Suspense>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/aboutus", 
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AboutUs />
                        </Suspense>
                    ),
                },
                {
                    path: "/addToCart", 
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AddToCart/>
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/login",
            element: (
                <Suspense fallback={<Loader />}>
                    <Login />
                </Suspense>
            ),
        },
        {
            path: "/signup", 
            element: (
                <Suspense fallback={<Loader />}>
                    <SignUp />
                </Suspense>
            ),
        },
    ];

    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
}
