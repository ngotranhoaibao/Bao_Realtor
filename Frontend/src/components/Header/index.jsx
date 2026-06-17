"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  { name: "GIỚI THIỆU", href: "#tong-quan" },
  { name: "VỊ TRÍ", href: "#vi-tri" },
  { name: "TIỆN ÍCH", href: "#tien-do" },
  { name: "SẢN PHẨM", href: "#mat-bang" },
  { name: "CHÍNH SÁCH", href: "#chinh-sach-ban-hang" },
  { name: "TIN TỨC", href: "#tin-tuc" },
  { name: "LIÊN HỆ", href: "#lien-he" },
];

const Header = () => {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId.replace("#", ""));

    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const handleScroll = (e, href) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="container flex h-full items-center justify-between mx-auto px-4">
        {/* LOGO CHÍNH THỨC DỰ ÁN THE LUMIA ĐÀ NẴNG */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-90 animate-fade-in"
        >
          <Image
            src="/the-lumia-da-nang-logo-white.png"
            alt="The Lumia Đà Nẵng Official Website"
            width={180}
            height={48}
            className="h-12 w-auto object-contain brightness-110 contrast-105"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={
                      item.href.startsWith("#") ? `/${item.href}` : item.href
                    }
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
                  <Link
                    key={item.name}
                    href={
                      item.href.startsWith("#") ? `/${item.href}` : item.href
                    }
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-xs font-bold tracking-widest text-slate-200 hover:text-amber-400 transition-colors border-b border-white/5 pb-2"
                  >
                    {item.name}
                  </Link>
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
