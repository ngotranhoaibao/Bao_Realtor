import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import LandingHome from "./pages/LandingHome/NewLanding.jsx";
import NewsPage from "./pages/NewsPage/index.jsx";
import DetailPage from "./pages/DetailPage/index.jsx";
import { Toaster } from "react-hot-toast";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

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
