import React from "react";
import { Phone } from "lucide-react";

const PhoneIcon = () => {
  return (
    <>
      <style>{`
        @keyframes custom-wiggle {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-25deg); }
          20%, 40%, 60%, 80% { transform: rotate(25deg); }
        }
        .animate-phone-wiggle { animation: custom-wiggle 1s infinite ease-in-out; }
      `}</style>

      <div className="fixed bottom-6 left-6 z-[9999] pointer-events-auto select-none font-sans">
        <a
          href="tel:0763553105"
          className="relative flex items-center gap-3 rounded-full px-4 py-3 transition-transform duration-300 ease-in-out hover:scale-105"
          aria-label="Gọi ngay 076 355 3105"
        >
          <div className="relative flex items-center">
            <span className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl" />
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 shadow-xl">
              <Phone className="h-6 w-6" />
            </span>
          </div>

          <div className="ml-2 flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3 rounded-full shadow-lg backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white/95">Gọi ngay</span>
              <span className="text-lg font-black text-white tracking-tight">
                076 355 3105
              </span>
            </div>
            <div className="hidden sm:block border-l border-white/40 pl-3">
              <span className="text-xs font-semibold text-white/90">
                Tư vấn & đặt chỗ
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default PhoneIcon;
