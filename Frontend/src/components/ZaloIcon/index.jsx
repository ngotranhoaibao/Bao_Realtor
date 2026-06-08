import React from 'react';

const ZaloIcon = () => {
  return (
    <>
      <style>{`
        @keyframes zalo-wiggle {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-25deg); }
          20%, 40%, 60%, 80% { transform: rotate(25deg); }
        }
        .animate-zalo-wiggle { animation: zalo-wiggle 1s infinite ease-in-out; }
      `}</style>

      {/* Thêm class 'group' để điều khiển hiệu ứng hover cho phần tử con */}
      <div className="fixed bottom-24 left-6 z-[9999] flex items-center pointer-events-auto select-none group font-sans">
        
        {/* Nút tròn luôn hiển thị */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20">
          <div className="absolute inset-0 bg-amber-400/10 rounded-full animate-ping [animation-duration:2.5s]" />
          <a 
            href="https://zalo.me/0763553105" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 md:w-11 md:h-11 bg-stone-950 text-amber-400 border-2 border-amber-400/60 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-amber-400 animate-zalo-wiggle" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .5C5.373.5 0 4.978 0 10.5c0 3.328 1.954 6.273 5 8.1v3.9c0 .414.534.62.828.328l3.656-3.656A13.882 13.882 0 0 0 12 19.5c6.627 0 12-4.478 12-10S18.627.5 12 .5Zm4.8 13.2h-4.5c-.4 0-.6-.2-.6-.6v-.3c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v.3c0 .4-.2.6-.6.6Zm0-2.4h-4.5c-.4 0-.6-.2-.6-.6v-.3c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v.3c0 .4-.2.6-.6.6Zm0-2.4h-4.5c-.4 0-.6-.2-.6-.6v-.3c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v.3c0 .4-.2.6-.6.6Z"/>
            </svg>
          </a>
        </div>

        {/* Thanh chữ ẩn mặc định, chỉ hiện khi hover vào khối group */}
        <a 
          href="https://zalo.me/0763553105" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden sm:flex items-center bg-stone-950/95 border border-amber-400/30 text-amber-400 font-bold text-sm tracking-widest h-10 md:h-11 rounded-r-full -ml-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ease-in-out w-0 opacity-0 overflow-hidden uppercase group-hover:w-32 group-hover:opacity-100 group-hover:pl-10 group-hover:pr-6"
        >
          Chat Zalo
        </a>
      </div>
    </>
  );
};

export default ZaloIcon;