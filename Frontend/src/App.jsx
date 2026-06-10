import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import LandingHome from "./pages/LandingHome/NewLanding.jsx";
import NewsPage from "./pages/NewsPage/index.jsx";
import DetailPage from "./pages/DetailPage/index.jsx";
import { Toaster } from "react-hot-toast";

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHash = (attempt = 0) => {
        const targetElement = document.querySelector(hash);

        if (!targetElement) {
          if (attempt < 12) {
            window.setTimeout(() => scrollToHash(attempt + 1), 80);
          }
          return;
        }

        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, left: 0, behavior: "smooth" });
      };

      window.setTimeout(() => scrollToHash(), 120);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster toastOptions={{ duration: 4000 }} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingHome />} />
          <Route path="tin-tuc" element={<NewsPage />} />
          <Route path="tin-tuc/:slug" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
