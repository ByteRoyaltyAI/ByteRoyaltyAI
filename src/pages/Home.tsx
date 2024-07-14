import React, { lazy, Suspense } from "react";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
// import { useTheme } from "../context/theme-context";
import { ScrollProgress } from "../components/ScrollProgress";
import ProjectSlider from "../components/ProjectSlider";
import Newnavbar from "../components/Newnavbar";
// import RadialGradient from "../components/RadialGradient";
import GlassmorphismWrapper from "../components/GlassmorphismWrapper";
import TalkingRobot from "../components/TalkingRobot";

const LazyBannerQuote = lazy(() => import("../components/BannerQuote"));
const LazyTechStack = lazy(() => import("../components/TechStack"));
const LazyAboutMe = lazy(() => import("../components/About"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));
// const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

const Home: React.FC = () => {
  // const { theme } = useTheme();
  return (
    <>
      {/* <NewNavBar/> */}
      <ThemeSwitch />
      {/* <RadialGradient
        scale="scale-y-[0]"
        opacity={theme === "light" ? "opacity-70" : "opacity-70"}
        position="-top-[0rem]"
      /> */}
      <header className="h-screen">
        <Newnavbar />
        <ScrollProgress
          position={"left"}
          color={"orange"}
          height={7}
          smoothness={true}
        />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <LazySiteBarLeft /> */}

          <LazyHeaderIntro />
          {/* <LazySiteBarRight /> */}
        </Suspense>
      </header>
      <main className="relative">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyBannerQuote
            style={"withBG"}
            quoteIndex={0}
            containerType="quote"
          />
          <GlassmorphismWrapper>
            <LazyTechStack />
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
            {/* <LazyRadialGradient
              opacity={theme === "light" ? "opacity-70" : "opacity-70"}
              scale="scale-y-100"
              position="-top-24"
            /> */}

            <GlassmorphismWrapper>
              <LazyAboutMe />
              {/* <TalkingRobot /> */}
            </GlassmorphismWrapper>

            <GlassmorphismWrapper>
              <LazyContact />
            </GlassmorphismWrapper>
            
          </div>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Home;
