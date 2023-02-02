import Blog from "./modules/Blog/Blog";
import Home from "./modules/Homepage/Home";
import TermsConditions from "./shared/Static/TermsConditions";
import Contact from "./shared/Static/Contact";
import BlogDetails from "./modules/Blog/BlogDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./shared/Components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogDetails /> },
      { path: "terms-and-conditions", element: <TermsConditions /> },
      { path: "contact-us", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
