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

      {/* Thêm class 'group' để điều khiển hiệu ứng hover */}
      <div className="fixed bottom-6 left-6 z-[9999] flex items-center pointer-events-auto select-none group font-sans">
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20">
          <div className="absolute inset-0 bg-amber-400/10 rounded-full animate-ping [animation-duration:2.5s]" />
          <a
            href="tel:0763553105"
            className="w-10 h-10 md:w-11 md:h-11 bg-stone-950 text-amber-400 border-2 border-amber-400/60 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105 active:scale-95"
          >
            <Phone className="h-4 w-4 fill-amber-400 animate-phone-wiggle" />
          </a>
        </div>
        <a
          href="tel:0763553105"
          // SỬA ĐỔI: Thêm justify-center để số điện thoại luôn nằm chính giữa thanh bar
          className="flex items-center justify-center bg-stone-950/95 border border-amber-400/30 text-amber-400 font-bold text-sm md:text-base tracking-widest h-10 md:h-11 rounded-r-full -ml-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-in-out overflow-hidden uppercase 
             w-0 opacity-0 group-hover:w-44 group-hover:opacity-100 group-hover:pl-6 group-hover:pr-6"
        >
          076.355.3105
        </a>
      </div>
    </>
  );
};

export default PhoneIcon;
