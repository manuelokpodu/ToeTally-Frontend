import { Home } from "../pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../components";
import Login from "../components/auth/LogIn";
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
                    path: "/aboutus", // Define the AboutUs route
                    element: (
                        <Suspense fallback={<Loader />}>
                            <AboutUs />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/login", // Define Login outside RootLayout
            element: (
                <Suspense fallback={<Loader />}>
                    <Login />
                </Suspense>
            ),
        },
    ];

    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
}
