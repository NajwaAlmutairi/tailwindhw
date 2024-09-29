import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App.jsx'
import ErrorPage from "../Error-page";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
