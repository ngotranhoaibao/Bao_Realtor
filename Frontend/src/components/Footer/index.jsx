import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Globe, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 font-sans antialiased border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. KHỐI FORM ĐĂNG KÝ CHUẨN ĐỊNH DẠNG 4 Ô (XEM CODE GỐC BIỂU MẪU) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-4xl mx-auto">
          <Card className="bg-slate-900 border border-white/10 text-white p-6 md:p-8 rounded-3xl shadow-2xl">
            <CardHeader className="p-0 pb-6 text-center space-y-2">
              <CardTitle className="text-xl md:text-2xl font-black text-amber-500 uppercase tracking-wide">
                ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN
              </CardTitle>
              <CardDescription className="text-slate-400 text-xs md:text-sm font-medium">
                (Bảng giá gốc, chính sách thanh toán, ưu đãi chiết khấu, vay vốn lãi suất 0%, tham quan nhà mẫu và tư vấn chuyên sâu)
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0">
              <form className="space-y-4">
                {/* Dòng 1: Họ tên, Email, Số điện thoại (Chia 3 cột trên desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="footer-name" className="text-xs font-bold uppercase tracking-wider text-slate-300">Họ và tên *</Label>
                    <Input id="footer-name" placeholder="Họ và tên" className="bg-slate-950 border-slate-800 text-white h-11 rounded-xl focus-visible:ring-amber-500" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="footer-email" className="text-xs font-bold uppercase tracking-wider text-slate-300">Email *</Label>
                    <Input id="footer-email" type="email" placeholder="Email" className="bg-slate-950 border-slate-800 text-white h-11 rounded-xl focus-visible:ring-amber-500" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="footer-phone" className="text-xs font-bold uppercase tracking-wider text-slate-300">Số điện thoại *</Label>
                    <Input id="footer-phone" type="tel" placeholder="Số điện thoại" className="bg-slate-950 border-slate-800 text-white h-11 rounded-xl focus-visible:ring-amber-500" required />
                  </div>
                </div>


                {/* Nút gửi form vàng hổ phách đặc trưng */}
                <div className="text-center pt-2">
                  <Button className="w-full sm:w-auto px-10 h-12 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold uppercase tracking-widest rounded-xl transition-all shadow-md">
                    Gửi ngay
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* ========================================================================= */}
        {/* 2. KHỐI THÔNG TIN VỀ CHÚNG TÔI & LIÊN HỆ CHÍNH THỨC */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-t border-white/10 pt-12">
          
          {/* Cột 1: Giới thiệu thương hiệu */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-500 uppercase tracking-widest border-l-4 border-amber-500 pl-3">
              VỀ CHÚNG TÔI
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify">
              <strong className="text-white">thelumia-danang.vn</strong> là trang thông tin chính thức đăng tải các thông tin về quy hoạch, quy mô, giá bán và các chính sách bán hàng dự án The Lumia Đà Nẵng. Chúng xin cam kết cung cấp bảng giá gốc và hỗ trợ mọi thủ tục đặt mua trực tiếp từ Chủ đầu tư Công ty Cổ phần Đầu tư Sài Gòn – Đà Nẵng (SDN).
            </p>
          </div>

          {/* Cột 2: Thông tin liên hệ cơ sở hạ tầng */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-500 uppercase tracking-widest border-l-4 border-amber-500 pl-3">
              LIÊN HỆ
            </h3>
            <ul className="space-y-3.5 text-slate-300 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span>61A Nguyễn Văn Cừ, Phường Hòa Hiệp Bắc, Quận Liên Chiểu, Đà Nẵng, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="tel:0763553105" className="hover:text-amber-400 transition-colors">096 998 6263</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="https://thelumia-danang.vn/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">https://thelumia-danang.vn/</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. SOCKET CHÂN TRANG CĂN GIỮA BẢN QUYỀN */}
        {/* ========================================================================= */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-slate-500 tracking-wider">
          <p>© Copyright 2025 The Lumia Da Nang. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}