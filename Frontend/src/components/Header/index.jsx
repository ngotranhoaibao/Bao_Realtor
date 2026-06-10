import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// ĐÃ SẮP XẾP LẠI THỨ TỰ CHUẨN UX THEO DÒNG LƯỚT TRANG TỪ TRÊN XUỐNG DƯỚI
const navItems = [
  { name: "CHÍNH SÁCH", href: "#chinh-sach-ban-hang" }, // Đưa khối ưu đãi/booking lên đầu
  { name: "GIỚI THIỆU", href: "#tong-quan" }, // Tổng quan dự án
  { name: "VỊ TRÍ", href: "#vi-tri" }, // Vị trí kim cương Liên Chiểu
  { name: "SẢN PHẨM", href: "#mat-bang" }, // Mặt bằng phân lô chi tiết
  { name: "TIỆN ÍCH", href: "#tien-do" }, // Hệ sinh thái All-In-One
  { name: "LIÊN HỆ", href: "#lien-he" }, // Form tư vấn cuối trang
];

const Header = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();

    const targetId = href.startsWith("#") ? href : `#${href}`;
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.history.pushState(null, "", targetId);

      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="container flex h-full items-center justify-between mx-auto px-4">
        {/* LOGO CHÍNH THỨC DỰ ÁN THE LUMIA ĐÀ NẴNG */}
        <a
          href="/"
          className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-90 animate-fade-in"
        >
          <img
            src="/the-lumia-da-nang-logo-white.png"
            alt="The Lumia Đà Nẵng Official Website"
            className="h-12 w-auto object-contain brightness-110 contrast-105"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`${navigationMenuTriggerStyle()} cursor-pointer bg-transparent text-slate-200 hover:text-amber-400 font-semibold text-xs tracking-widest transition-colors duration-200`}
                    style={{ backgroundColor: "transparent" }}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-slate-950 text-white p-6 w-[260px] border-l border-white/10"
            >
              <nav className="flex flex-col gap-5 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-xs font-bold tracking-widest text-slate-200 hover:text-amber-400 transition-colors border-b border-white/5 pb-2"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
