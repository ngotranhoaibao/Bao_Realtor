import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout"; // Thêm dấu @ và bỏ đuôi .jsx thử xem nhé
import LandingHome from "./pages/LandingHome/NewLanding.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster toastOptions={{ duration: 4000 }} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;