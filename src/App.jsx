import Blog from "./modules/Blog/Blog";
import Home from "./modules/Homepage/Home";
import Contact from "./shared/Static/Contact";
import TermsConditions from "./shared/Static/TermsConditions";
import Footer from "./shared/Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./shared/Components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar /> <Home /> <Footer />
      </>
    ),
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
      <RouterProvider router={router} />
    </>
  );
};

export default App;
