import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";
import SubProductPage from "./pages/SubProductPage"
import Newnavbar from "./components/Newnavbar";
import ProductsPage from "./pages/ProductsPage";
import BookADemoPage from "./pages/BookADemoPage";
import ServicesPage from "./pages/ServicesPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
                <ToastContainer
            className="text-3xl p-3 mt-10 w-[40rem] sm:w-[50rem] lg:w-[70rem]"
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" 
          />
              <Newnavbar/>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/imprint" element={<Home />}></Route>
                <Route path="/privacy" element={<Home />}></Route>
                <Route path="/product/:productName" element={<ProductsPage />}></Route>
                <Route path="/product/:productName/:subProduct" element={<SubProductPage />}></Route>
                <Route path="/product/book-a-demo" element={<BookADemoPage />}></Route>
                <Route path="/services/:service" element={<ServicesPage />}></Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
