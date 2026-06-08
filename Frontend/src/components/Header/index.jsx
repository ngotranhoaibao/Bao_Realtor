import React from 'react';
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

// Danh sách menu in hoa đồng bộ chuẩn theo thiết kế dự án The Lumia Đà Nẵng
const navItems = [
  { name: "GIỚI THIỆU", href: "#tong-quan" },
  { name: "TIỆN ÍCH", href: "#tien-do" }, 
  { name: "SẢN PHẨM", href: "#mat-bang" }, 
  { name: "VỊ TRÍ", href: "#vi-tri" },
  { name: "LIÊN HỆ", href: "#lien-he" },
];

const Header = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="container flex h-full items-center justify-between mx-auto px-4">
        
        {/* LOGO CHÍNH THỨC DỰ ÁN THE LUMIA ĐÀ NẴNG (BẢN WHITE TRÊN NỀN TỐI) */}
        <a href="/" className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-90">
          <img 
            src="https://thelumia-danang.vn/wp-content/uploads/2025/07/the-lumia-da-nang-logo-white.png" 
            alt="The Lumia Đà Nẵng" 
            className="h-12 w-auto object-contain brightness-110 contrast-105" 
          />
        </a>

        {/* DESKTOP NAVIGATION (CHỈ CHỨA MENU CHỮ SANG TRỌNG) */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`${navigationMenuTriggerStyle()} cursor-pointer bg-transparent text-slate-200 hover:text-amber-400 font-semibold text-xs tracking-widest transition-colors`}
                    style={{ backgroundColor: 'transparent' }}
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
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 text-white p-6 w-[260px] border-l border-white/10">
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