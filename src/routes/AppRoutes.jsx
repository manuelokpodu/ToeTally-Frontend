import { Home } from "../pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../components";
const RootLayout = lazy(() => import("../layouts/RootLayout"));


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
        children : [{
            path: "/",
            element: <Home/>
        }]
      }
    ]

    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
}