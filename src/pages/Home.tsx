import React, { lazy, Suspense } from "react";
import Footer from "../components/Footer";
import ProjectSlider from "../components/ProjectSlider";
import GlassmorphismWrapper from "../components/GlassmorphismWrapper";
import Consultation from "../components/Consultation";

const LazyBannerQuote = lazy(() => import("../components/BannerQuote"));
const LazyServices = lazy(() => import("../components/OurServices"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));


const Home: React.FC = () => {

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
            <LazyBannerQuote
              style={"noBG"}
              quoteIndex={1}
              containerType="statement"
            />
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
