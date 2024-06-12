import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import PhotoAlbum1 from "./landing/PhotoAlbum1";
import ServiceDetailsLeftSidebar1 from "./service/ServiceDetailsLeftSidebar1";
import ServiceDetailsLeftSidebar2 from "./service/ServiceDetailsLeftSidebar2";
import ServiceDetailsLeftSidebar3 from "./service/ServiceDetailsLeftSidebar3";
import ServiceDetailsLeftSidebar4 from "./service/ServiceDetailsLeftSidebar4";
import Products from "./pages/Products";

const HomeOne = lazy(() => import("./home/HomeOne"));
const HomeTwo = lazy(() => import("./home/HomeTwo"));
const HomeThree = lazy(() => import("./home/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./service/Services"));
const ServiceDetailsLeftSidebar = lazy(() =>
  import("./service/ServiceDetailsLeftSidebar")
);
const ServiceDetailsRightSidebar = lazy(() =>
  import("./service/ServiceDetailsRightSidebar")
);
const Projects = lazy(() => import("./project/Projects"));
const ProjectDetails = lazy(() => import("./project/ProjectDetails"));
const BlogLeftSidebar = lazy(() => import("./blog/BlogLeftSidebar"));
const BlogRightSidebar = lazy(() => import("./blog/BlogRightSidebar"));
const BlogDetailsLeftSidebar = lazy(() =>
  import("./blog/BlogDetailsLeftSidebar")
);
const BlogDetailsRightSidebar = lazy(() =>
  import("./blog/BlogDetailsRightSidebar")
);
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<HomeOne />} />
          <Route path="/home-one" element={<HomeOne />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/photoAlbum" element={<PhotoAlbum1 />} />
          <Route
            path="/service-details-left-sidebar"
            element={<ServiceDetailsLeftSidebar />}
          />
          <Route
            path="/service-details-left-sidebar1"
            element={<ServiceDetailsLeftSidebar1 />}
          />
          <Route
            path="/service-details-left-sidebar2"
            element={<ServiceDetailsLeftSidebar2 />}
          />
          <Route
            path="/service-details-left-sidebar3"
            element={<ServiceDetailsLeftSidebar3 />}
          />
          <Route
            path="/service-details-left-sidebar4"
            element={<ServiceDetailsLeftSidebar4 />}
          />

          <Route path="/products" element={<Products />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route
            path="/blog-details-left-sidebar"
            element={<BlogDetailsLeftSidebar />}
          />
          <Route
            path="/blog-details-right-sidebar"
            element={<BlogDetailsRightSidebar />}
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NoMAtch />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
