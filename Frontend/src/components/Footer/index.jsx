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
      className="bg-slate-950 text-white py-16 font-sans antialiased border-t border-white/5 w-full"
    >
      {/* KHỐI 1: Chỉ bọc riêng Form đăng ký để giữ form nằm gọn gàng ở giữa */}
      <div className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="w-full max-w-4xl mx-auto">
          <Card className="bg-slate-900 border border-white/10 text-white p-6 md:p-8 rounded-3xl shadow-2xl">
            <CardHeader className="p-0 pb-6 text-center space-y-2">
              <CardTitle className="text-xl md:text-2xl font-black text-amber-500 uppercase tracking-wide">
                ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN
              </CardTitle>
              <CardDescription className="text-slate-400 text-xs md:text-sm font-medium">
                (Bảng giá gốc, chính sách thanh toán, ưu đãi chiết khấu, vay vốn
                lại suất 0%, tham quan nhà mẫu và tư vấn chuyên sâu)
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              <form className="space-y-4" onSubmit={handleFooterSubmit}>
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
      </div>

      {/* ========================================================================= */}
      {/* 2. KHỐI THÔNG TIN VỀ CHÚNG TÔI & LIÊN HỆ — FIX TRÀN VIỀN ĐẸP, KHÔNG LỖI CO CHỮ */}
      {/* ========================================================================= */}
      {/* Sử dụng px-6 md:px-16 để tạo khoảng hở tinh tế với hai bên cạnh màn hình */}
      <div className="w-full px-6 md:px-16 border-t border-white/10 pt-16 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start w-full">
          {/* CỘT TRÁI: VỀ CHÚNG TÔI */}
          <div className="space-y-5 w-full">
            <h3 className="text-base md:text-lg font-bold text-amber-500 uppercase tracking-[0.2em] border-l-4 border-amber-500 pl-4 leading-none text-left">
              VỀ CHÚNG TÔI
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed text-justify font-medium">
              <strong className="text-white font-semibold">
                thelumia.asia
              </strong>{" "}
              là trang thông tin chính thức đăng tải các thông tin về quy hoạch,
              quy mô, giá bán và các chính sách bán hàng dự án The Lumia Đà
              Nẵng. Chúng tôi xin cam kết cung cấp bảng giá gốc và hỗ trợ mọi
              thủ tục đặt mua trực tiếp từ Chủ đầu tư Công ty Cổ phần Đầu tư Sài
              Gòn – Đà Nẵng (SDN).
            </p>
          </div>

          {/* CỘT PHẢI: LIÊN HỆ CHÍNH THỨC (Đã fix chia đôi 50/50 phẳng, text trải rộng thoải mái) */}
          <div className="space-y-5 w-full">
            <h3 className="text-base md:text-lg font-bold text-amber-500 uppercase tracking-[0.2em] border-l-4 border-amber-500 pl-4 leading-none text-left">
              LIÊN HỆ CHÍNH THỨC
            </h3>

            <ul className="text-slate-300 text-sm md:text-base w-full divide-y divide-white/5 font-medium text-left">
              {/* Địa chỉ */}
              <li className="py-4 flex items-center justify-between gap-4 w-full group">
                <div className="flex items-center gap-3 shrink-0">
                  <MapPin className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-white">Địa chỉ</span>
                </div>
                <span className="text-slate-300 text-right group-hover:text-amber-400 transition-colors duration-300">
                  606 đường 2 tháng 9, Q. Hải Châu, TP. Đà Nẵng, Việt Nam
                </span>
              </li>

              {/* Hotline */}
              <li className="py-4 flex items-center justify-between gap-4 w-full group">
                <div className="flex items-center gap-3 shrink-0">
                  <Phone className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-white">Hotline</span>
                </div>
                <a
                  href="tel:0763553105"
                  className="text-slate-300 hover:text-amber-400 text-right tracking-wider transition-colors duration-300"
                >
                  076 355 3105
                </a>
              </li>

              {/* Website */}
              <li className="py-4 flex items-center justify-between gap-4 w-full group">
                <div className="flex items-center gap-3 shrink-0">
                  <Globe className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-white">Website</span>
                </div>
                <a
                  href="https://thelumia.asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400 text-right break-all transition-colors duration-300"
                >
                  https://thelumia.asia/
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền dưới chân trang */}
        <div className="border-t border-white/5 mt-16 pt-8 text-center text-xs text-slate-600 tracking-widest w-full font-medium">
          <p>© COPYRIGHT 2026 THE LUMIA DA NANG. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
