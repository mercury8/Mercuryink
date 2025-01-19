import { BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// Lazy load your components
const LazyAbout = lazy(() => import("./components/About"));
const LazyContact = lazy(() => import("./components/Contact"));
const LazyFeedbacks = lazy(() => import("./components/Feedbacks"));
const LazyHero = lazy(() => import("./components/Hero"));
const LazyNavbar = lazy(() => import("./components/Navbar"));
const LazyTech = lazy(() => import("./components/Tech"));
const LazyWorks = lazy(() => import("./components/Works"));
const LazyStarsCanvas = lazy(() => import("./components/canvas/Stars"));
const LazyNewstars = lazy(() => import("./components/Newstars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-50 ">
        <div>
          {/* Wrap your lazy-loaded components with Suspense and provide a fallback */}
          <Suspense fallback={<div>Loading...</div>}>
            <LazyNavbar />
            <LazyHero />
            <LazyAbout />
            {/* <LazyTech /> */}
            <LazyWorks />
            <LazyFeedbacks />
          </Suspense>
        </div>
        {/* These components are not lazy-loaded */}
        <Suspense fallback={<div>Loading...</div>}>
          <LazyContact />
          {/* <LazyStarsCanvas /> */}
        </Suspense>
      </div>
      <div className="relative z-0 bg-primary">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyNewstars />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
