import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";
import SubProductPage from "./pages/SubProductPage"
import Newnavbar from "./components/Newnavbar";
import ProductsPage from "./pages/ProductsPage";
import BookADemoPage from "./pages/BookADemoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Newnavbar/>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/imprint" element={<Home />}></Route>
                <Route path="/privacy" element={<Home />}></Route>
                <Route path="/product/:hr-services" element={<ProductsPage />}></Route>
                <Route path="/product/:productName/:subProduct" element={<SubProductPage />}></Route>
                <Route path="/product/book-a-demo" element={<BookADemoPage />}></Route>
              </Routes>
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
