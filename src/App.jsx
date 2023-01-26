import Blog from "./modules/Blog/Blog";
import Home from "./modules/Homepage/Home";
import TermsConditions from "./shared/Static/TermsConditions";
import Footer from "./shared/Components/Footer";
import Header from "./modules/Homepage/components/Header";
import Contact from "./shared/Static/Contact";
import BlogDetails from "./modules/Blog/BlogDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
  },
  { path: "/terms-and-conditions", element: <TermsConditions /> },
  { path: "/contact-us", element: <Contact /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
