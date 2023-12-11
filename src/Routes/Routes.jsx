import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Homepage from "../Pages/Homepage/Homepage";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            }
        ]
    }
])