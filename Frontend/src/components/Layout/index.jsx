import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

export default function Layout() {
    const location = useLocation();

    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Thanh điều hướng cố định trên cùng */}
            <Header />
            
            {/* Thêm lớp pt-20 (Padding Top 80px) bằng đúng chiều cao h-20 của Header để đẩy khối hình ảnh dự án xuống */}
            <main className="flex-grow w-full pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}