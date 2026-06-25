import React from "react";

const ZaloIcon = () => {
  return (
    <>
      <style>{`
        @keyframes zalo-wiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-20deg) scale(1); }
          20%, 40%, 60%, 80% { transform: rotate(20deg) scale(1); }
        }
        .animate-zalo-wiggle { animation: zalo-wiggle 1s infinite ease-in-out; }
      `}</style>

      <div className="fixed bottom-32 left-6 z-[9999] pointer-events-auto select-none font-sans">
        <a
          href="https://zalo.me/0763553105"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 rounded-full px-3 py-2 sm:px-4 sm:py-3 transition-transform duration-300 ease-in-out hover:scale-105"
          aria-label="Chat Zalo 076 355 3105"
        >
          <div className="relative flex items-center">
            <span className="absolute inset-0 rounded-full bg-blue-400/30 blur-2xl" />
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-white animate-zalo-wiggle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .5C5.373.5 0 4.978 0 10.5c0 3.328 1.954 6.273 5 8.1v3.9c0 .414.534.62.828.328l3.656-3.656A13.882 13.882 0 0 0 12 19.5c6.627 0 12-4.478 12-10S18.627.5 12 .5Zm4.8 13.2h-4.5c-.4 0-.6-.2-.6-.6v-.3c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v.3c0 .4-.2.6-.6.6Zm0-2.4h-4.5c-.4 0-.6-.2-.6-.6v-.3c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v.3c0 .4-.2.6-.6.6Zm0-2.4h-4.5c-.4 0-.6-.2-.6-.6v-.3c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v.3c0 .4-.2.6-.6.6Z" />
              </svg>
            </span>
          </div>

          <div className="hidden sm:flex ml-2 items-center gap-3 bg-gradient-to-r from-blue-400 to-blue-500 px-5 py-3 rounded-full shadow-lg backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white/95">Chat Zalo</span>
              <span className="text-lg font-black text-white tracking-tight">
                0763553105
              </span>
            </div>
            <div className="border-l border-white/40 pl-3">
              <span className="text-xs font-semibold text-white/90">
                Liên hệ ngay
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ZaloIcon;
