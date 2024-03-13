import React, { lazy, Suspense } from "react";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import { useTheme } from "../context/theme-context";
import { ScrollProgress } from "../components/ScrollProgress";
import ProjectSlider from "../components/ProjectSlider";




const LazyBannerQuote = lazy(() => import("../components/BannerQuote"));
const LazySiteBarLeft = lazy(() => import("../components/SiteBarLeft"));
const LazyTechStack = lazy(() => import("../components/TechStack"));
const LazyAboutMe = lazy(() => import("../components/AboutMe"));
const LazyContact = lazy(() => import("../components/Contact"));
const LazyHeaderIntro = lazy(() => import("../components/HeaderIntro"));
const LazyRadialGradient = lazy(() => import("../components/RadialGradient"));

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-screen">

          <ScrollProgress
            position={"left"}
            color={"orange"}
            height={15}
            smoothness={true}

          />
          <Suspense fallback={<div>Loading...</div>}>
            <LazySiteBarLeft />
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

            <LazyTechStack />


            <LazyBannerQuote
              style={"noBG"}
              quoteIndex={1}
              containerType="statement"
            />

            <ProjectSlider />
            <div className="relative -mb-24 pb-32 -mt-10">
              <LazyRadialGradient
                opacity={theme === "light" ? "opacity-30" : "opacity-30"}
                scale="scale-y-100"
                position="-top-24"
              />

              <LazyAboutMe />

              <LazyContact />
            </div>
          </Suspense>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
