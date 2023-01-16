import Blog from "./modules/Blog/Blog";
import Home from "./modules/Homepage/Home";
import Contact from "./Shared/Static/Contact";
import TermsConditions from "./Shared/Static/TermsConditions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  { path: "/terms-and-conditions", element: <TermsConditions /> },
  { path: "/contact-us", element: <Contact /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
