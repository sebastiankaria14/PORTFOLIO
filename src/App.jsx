import { lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";

// Lazy load sections that are below the fold
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Suspense fallback={<SectionLoader />}>
      <ShowcaseSection />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <LogoShowcase />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <FeatureCards />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Experience />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <TechStack />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Contact />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </>
);

export default App;
