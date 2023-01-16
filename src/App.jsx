import Blog from "./modules/Blog/Blog";
import Home from "./modules/Homepage/Home";
import Contact from "./shared/Static/Contact";
import TermsConditions from "./shared/Static/TermsConditions";
import Navbar from "./Shared/Components/Navbar";
import Footer from "./Shared/Components/Footer";
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
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
