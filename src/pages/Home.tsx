import React, { lazy, Suspense, useEffect } from "react";
import Footer from "../components/Footer";
import ProjectSlider from "../components/ProjectSlider";
import GlassmorphismWrapper from "../components/GlassmorphismWrapper";
import Consultation from "../components/Consultation";
import { useLocation } from "react-router-dom";

const LazyBannerQuote = lazy(() => import("../components/BannerQuote"));
const LazyServices = lazy(() => import("../components/OurServices"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      scroll("contact");
    }else if(location.hash === "#consulation") {
      scroll("consultation");
    }else if(location.hash === "#projects") {
      scroll("projects");
    }else if(location.hash === "#services") {
      scroll("services");
    }
  }, [location]);

  function scroll(val: string) {
    let element = document.getElementById(`${val}`);

    if (element) {
      const offset = -70; // Adjust the offset according to your need

      // Get the element's top position relative to the viewport
      const elementTop = element.getBoundingClientRect().top;

      // Scroll to the element's position with an offset
      window.scrollBy({
        top: elementTop + offset,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeaderIntro />
      </Suspense>

      <main className="relative">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyBannerQuote
            style={"withBG"}
            quoteIndex={0}
            containerType="quote"
          />
          <GlassmorphismWrapper>
            <LazyServices />
          </GlassmorphismWrapper>

          <GlassmorphismWrapper>
            {/* <LazyBannerQuote
              style={"noBG"}
              quoteIndex={1}
              containerType="statement"
            /> */}
            <div className="py-40 pb-60 flex justify-center">
             <h3 className="text-[--blue] text-center text-[25px]  sm:text-[3.2rem] max-lg:mb-10 max-lg:leading-tight w-[90%] sm:w-2/3">
             "Companies that use Artificial Intelligence are 50% more likely to outpace their competitors. "
             </h3>
            </div>
          </GlassmorphismWrapper>

          <GlassmorphismWrapper>
            <ProjectSlider />
          </GlassmorphismWrapper>
          <div className="relative -mb-24 pb-32 -mt-10">

            <GlassmorphismWrapper>
              <LazyContact />
            </GlassmorphismWrapper>

            <GlassmorphismWrapper>
              <Consultation />
            </GlassmorphismWrapper>
          </div>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Home;
