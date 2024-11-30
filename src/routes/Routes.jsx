import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ErrorHandler from "../pages/errorHandleer/errorHandler";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorHandler></ErrorHandler>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/data.json"),
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch("/data.json"),
            },
        ],
    },
]);
export default router;
