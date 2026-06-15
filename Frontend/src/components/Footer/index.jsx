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
import toast from "react-hot-toast";
import { submitContact } from "@/services/api/contact";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
        message: "Đăng ký tải tài liệu dự án từ chân trang",
      };
      await submitContact(payload);
      toast.success("Đăng ký nhận thông tin thành công!");
      setName("");
      setPhone("");
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
      className="bg-slate-900 text-white pt-16 pb-24 font-sans antialiased border-t border-white/5 w-full relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('https://thelumia.asia/')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* ========================================================================= */}
        {/* HÀNG TRÊN: PHÂN CHIA 2 CỘT NGANG NHAU (THÔNG TIN DỰ ÁN & FORM ĐĂNG KÝ) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start w-full mb-16">
          {/* CỘT TRÁI (CHIẾM 5 CỘT): TIÊU ĐỀ & DANH SÁCH THÔNG TIN */}
          <div className="md:col-span-5 space-y-6 text-left pt-2">
            <h2 className="text-2xl md:text-3xl font-black tracking-wide uppercase text-white">
              THE LUMIA ĐÀ NẴNG
            </h2>
            <ul className="text-slate-200 text-sm md:text-base space-y-3 font-medium list-disc pl-5">
              <li className="leading-relaxed">
                Địa chỉ liên hệ: Nguyễn Tất Thành Nối Dài, Đà Nẵng 550000 Việt
                Nam
              </li>
              <li className="leading-relaxed">
                Hotline:{" "}
                <a
                  href="tel:0763553105"
                  className="hover:text-amber-400 transition-colors"
                >
                  0763 553 105
                </a>
              </li>
              <li className="leading-relaxed">
                Website:{" "}
                <a
                  href="https://thelumia.asia"
                  className="hover:text-amber-400 transition-colors"
                >
                  thelumia.asia
                </a>
              </li>
            </ul>
          </div>

          {/* CỘT PHẢI (CHIẾM 7 CỘT): KHỐI FORM ĐĂNG KÝ NỀN TỐI SỬ DỤNG SHADCN CARD */}
          <div className="md:col-span-7 w-full max-w-xl md:ml-auto">
            <Card className="bg-slate-950/90 border border-slate-800 text-white p-6 md:p-8 rounded-none shadow-2xl">
              {/* Sử dụng CardHeader, CardTitle, CardDescription từ Shadcn UI */}
              <CardHeader className="p-0  text-center space-y-2">
                <CardTitle className="text-base md:text-lg font-bold uppercase tracking-wide text-white">
                  ĐĂNG KÝ TẢI TÀI LIỆU DỰ ÁN
                </CardTitle>
                <CardDescription className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                  Bảng giá, tài liệu, chính sách chiết khấu mới nhất Dự Án The
                  Lumia Đà Nẵng
                </CardDescription>
              </CardHeader>

              {/* Phần thân chứa Form tương tác */}
              <CardContent className="p-0">
                <form className="space-y-4" onSubmit={handleFooterSubmit}>
                  {/* Ô nhập Họ tên kèm Label Shadcn */}
                  <div className="w-full space-y-1.5 text-left">
                    <Label
                      htmlFor="footer-name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Họ và tên *
                    </Label>
                    <Input
                      id="footer-name"
                      placeholder="Họ và tên"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border-none text-slate-900 h-11 rounded-md focus-visible:ring-red-500 font-medium placeholder:text-slate-400"
                      required
                    />
                  </div>

                  {/* Ô nhập Số điện thoại kèm Label Shadcn */}
                  <div className="w-full space-y-1.5 text-left">
                    <Label
                      htmlFor="footer-phone"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Số điện thoại *
                    </Label>
                    <Input
                      id="footer-phone"
                      type="tel"
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white border-none text-slate-900 h-11 rounded-md focus-visible:ring-red-500 font-medium placeholder:text-slate-400"
                      required
                    />
                  </div>

                  {/* Nút bấm Submit chuẩn Shadcn UI */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider rounded-md transition-all shadow-md active:scale-99"
                    >
                      {loading ? "Đang xử lý..." : "Nhận thông tin"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HÀNG DƯỚI: KHỐI LIÊN KẾT & MIỄN TRỪ TRÁCH NHIỆM PHÁP LÝ */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-white/10 space-y-4 text-center">
          <p className="text-slate-400 text-sm md:text-base leading-relaxed text-justify font-medium">
            <strong className="text-white font-semibold">thelumia.asia</strong>{" "}
            là trang thông tin chính thức chuyên cung cấp, cập nhật liên tục các
            thông tin quy hoạch chi tiết, tiến độ xây dựng hạ tầng, bảng giá đợt
            1 và các chính sách ưu đãi chiết khấu trực tiếp từ chủ đầu tư. Chúng
            tôi đồng hành sát sao cùng quý khách hàng trong việc tư vấn lựa chọn
            phương án an cư và đầu tư tối ưu nhất.
          </p>
          <p className="text-xs text-slate-500 tracking-widest  font-bold">
            COPYRIGHT 2026 © THE LUMIA ĐÀ NẴNG. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
