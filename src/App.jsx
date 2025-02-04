import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/home-page";
import ContactPage from "./assets/pages/contact-page";
import NavigationComponent from "./assets/components/navigation-component";
import AboutPage from "./assets/pages/about-page";
import ProjectPage from "./assets/pages/project-page";
import RouteDinamicProject from "./assets/pages/RDProject";
import { projectsList } from "./assets/js/projects-list";
import ErrorPage from "./assets/pages/error-page";
import ServicesPage from "./assets/pages/services-page";
import FooterComponent from "./assets/components/footer-component";
import ScrollTop from "./assets/components/scroll-top";
import { Toaster } from "react-hot-toast";
import FooterLinkComponent from "./assets/components/footer-links-component";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  disable: false,
  once: true
});
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <NavigationComponent />
        <Toaster position="top-right" />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route
            path="/projects/:id"
            element={<RouteDinamicProject projectsList={projectsList} />}
          />
          <Route path="*/*" element={<ErrorPage />} />
        </Routes>
        <FooterLinkComponent />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
