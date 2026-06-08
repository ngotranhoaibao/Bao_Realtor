import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Lắng nghe sự kiện cuộn trang
  useEffect(() => {
    const toggleVisibility = () => {
      // Hiện nút khi cuộn xuống quá 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[9999] p-3 rounded-full bg-stone-950 border-2 border-amber-400/60 text-amber-400 shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-110 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
};

export default ScrollUp;