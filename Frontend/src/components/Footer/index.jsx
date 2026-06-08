import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Globe } from "lucide-react";
import toast from "react-hot-toast";
import { submitContact } from "@/services/api/contact";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Vui lòng điền họ tên và số điện thoại.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim(),
      };
      await submitContact(payload);
      toast.success("Đăng ký nhận thông tin thành công!");
      setName("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Gửi thông tin thất bại, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="lien-he"
      className="bg-slate-950 text-white py-16 font-sans antialiased border-t border-white/5"
    >
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* ========================================================================= */}
        {/* 1. KHỐI FORM ĐĂNG KÝ CHUẨN ĐỊNH DẠNG Ô MÀU TRẮNG */}
        {/* ========================================================================= */}
        <div className="w-full max-w-4xl mx-auto">
          <Card className="bg-slate-900 border border-white/10 text-white p-6 md:p-8 rounded-3xl shadow-2xl">
            <CardHeader className="p-0 pb-6 text-center space-y-2">
              <CardTitle className="text-xl md:text-2xl font-black text-amber-500 uppercase tracking-wide">
                ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN
              </CardTitle>
              <CardDescription className="text-slate-400 text-xs md:text-sm font-medium">
                (Bảng giá gốc, chính sách thanh toán, ưu đãi chiết khấu, vay vốn
                lãi suất 0%, tham quan nhà mẫu và tư vấn chuyên sâu)
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              <form className="space-y-4" onSubmit={handleFooterSubmit}>
                {/* Dòng 1: Họ tên và Số điện thoại chia 2 cột */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="footer-name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Họ và tên *
                    </Label>
                    <Input
                      id="footer-name"
                      placeholder="Họ và tên"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border-none text-slate-900 h-11 rounded-xl focus-visible:ring-amber-500 font-medium"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="footer-phone"
                      className="text-xs font-bold uppercase tracking-wider text-slate-300"
                    >
                      Số điện thoại *
                    </Label>
                    <Input
                      id="footer-phone"
                      type="tel"
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white border-none text-slate-900 h-11 rounded-xl focus-visible:ring-amber-500 font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Dòng 2: Thay thế ô Email cũ bằng ô Nội dung thêm */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="footer-message"
                    className="text-xs font-bold uppercase tracking-wider text-slate-300"
                  >
                    Nội dung thêm
                  </Label>
                  <Textarea
                    id="footer-message"
                    placeholder="Mời bạn để lại yêu cầu, thời gian liên hệ, hoặc thông tin bổ sung"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white border-none text-slate-900 rounded-xl text-base focus-visible:ring-amber-500 min-h-[100px] px-4 py-3 font-medium"
                  />
                </div>

                <div className="text-center pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 h-12 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold uppercase tracking-widest rounded-xl transition-all shadow-md"
                  >
                    {loading ? "Đang gửi..." : "Gửi ngay"}
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
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-500 uppercase tracking-widest border-l-4 border-amber-500 pl-3">
              VỀ CHÚNG TÔI
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify">
              <strong className="text-white">thelumiadanang</strong> là trang
              thông tin chính thức đăng tải các thông tin về quy hoạch, quy mô,
              giá bán và các chính sách bán hàng dự án The Lumia Đà Nẵng. Chúng
              xin cam kết cung cấp bảng giá gốc và hỗ trợ mọi thủ tục đặt mua
              trực tiếp từ Chủ đầu tư Công ty Cổ phần Đầu tư Sài Gòn – Đà Nẵng
              (SDN).
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-500 uppercase tracking-widest border-l-4 border-amber-500 pl-3">
              LIÊN HỆ
            </h3>
            <ul className="space-y-3.5 text-slate-300 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span>606 đường 2 tháng 9, Đà Nẵng, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <a
                  href="tel:0763553105"
                  className="hover:text-amber-400 transition-colors"
                >
                  076 355 3105
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-amber-500 shrink-0" />
                <a
                  href="https://thelumia-danang.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  https://thelumia-danang.vn/
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-slate-500 tracking-wider">
          <p>© Copyright 2026 The Lumia Da Nang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
