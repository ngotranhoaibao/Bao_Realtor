"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "TỔNG QUAN", href: "#tong-quan" },
  { name: "CHÍNH SÁCH", href: "#chinh-sach-ban-hang" },
  { name: "VỊ TRÍ", href: "#vi-tri" },
  { name: "MẶT BẰNG", href: "#mat-bang" },
  { name: "TIẾN ĐỘ", href: "#tien-do" },
  { name: "TIN TỨC", href: "#tin-tuc" },
];

const Header = () => {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId.replace("#", ""));
    if (!element) return;
    const headerOffset = 100;
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-slate-950 backdrop-blur-xl shadow-sm shadow-slate-950/20">
      <div className="container mx-auto flex h-28 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-24 w-34 items-center justify-center rounded-[2.5rem] bg-slate-950 shadow-2xl shadow-slate-950/30">
            <img
              src="/images/logo-sun-s-light-tower.avif"
              alt="logo-sun-s-light"
              className="h-20 w-auto max-w-full object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-base font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:text-amber-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6 text-slate-950">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-base font-semibold uppercase tracking-[0.16em] text-slate-900 hover:text-amber-500"
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
