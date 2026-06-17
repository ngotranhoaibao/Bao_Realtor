"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsArticles } from "@/data/newsArticles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RegisterDialog from "@/components/RegisterDialog";
import PhoneIcon from "@/components/PhoneIcon";
import ZaloIcon from "@/components/ZaloIcon";
import ScrollUp from "@/components/ScrollUp";
import toast from "react-hot-toast";
import { submitContact } from "@/services/api/contact";
import {
  ShieldCheck,
  Layers,
  MapPin,
  Building2,
  Briefcase,
  TrendingUp,
  KeyRound,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Heart,
  Gem,
  Award,
  ArrowRight,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

const featuredNewsCards = newsArticles;

const NewLanding = () => {
  const [isStickyOpen, setIsStickyOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [newsStartIndex, setNewsStartIndex] = useState(0);

  // State quản lý cho Form tài liệu bổ sung dưới phần tổng quan
  const [docName, setDocName] = useState("");
  const [docPhone, setDocPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const visibleNewsCards = featuredNewsCards.slice(
    newsStartIndex,
    newsStartIndex + 4,
  );
  const canGoPrev = newsStartIndex > 0;
  const canGoNext = newsStartIndex + 4 < featuredNewsCards.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hàm xử lý gửi form đăng ký nhận tài liệu giữa trang
  const handleDocSubmit = async (e) => {
    e.preventDefault();
    if (!docName || !docPhone) {
      toast.error("Vui lòng nhập đầy đủ Họ tên và Số điện thoại.");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        name: docName.trim(),
        phone: docPhone.trim(),
        message: "Yêu cầu nhận trọn bộ tài liệu & quỹ căn đẹp giữa trang",
      };
      await submitContact(payload);
      toast.success(
        "Đăng ký nhận tài liệu thành công! Bản gốc đang được gửi tới bạn.",
      );
      setDocName("");
      setDocPhone("");
    } catch (err) {
      console.error(err);
      toast.error("Gửi thông tin không thành công, vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full bg-white text-slate-950 antialiased relative"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .font-title-luxury {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. HERO SLIDER BANNER — ĐẠI CẢNH ĐÊM KHÔNG GIAN VÔ CỰ LOGO */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-between bg-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.25), rgba(0,0,0,0.75)), url('/the-lumia-da-nang.jpg')`,
          }}
        />

        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-between py-24 z-10 text-white pointer-events-none">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full mt-16 px-4">
            <div className="bg-slate-950/70 border border-white/20 px-8 py-4 rounded-2xl backdrop-blur-md shadow-2xl text-center w-full sm:w-auto min-w-[220px]">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mb-1">
                Phân khu thấp tầng
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-white drop-shadow-md">
                THE ORION
              </h2>
            </div>
            <div className="bg-slate-950/70 border border-amber-500/30 px-8 py-4 rounded-2xl backdrop-blur-md shadow-2xl text-center w-full sm:w-auto min-w-[220px]">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-amber-400 font-medium mb-1">
                Đô thị sinh thái
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-[0.15em] text-amber-400 drop-shadow-md">
                ALL-IN-ONE
              </h2>
            </div>
          </div>

          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 text-center space-y-5 max-w-4xl w-full px-6 py-8 pointer-events-auto bg-slate-950/45 backdrop-blur-[3px] rounded-[1.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              TRỰC TIẾP CHỦ ĐẦU TƯ — GIÁ TỐT NHẤT
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-title-luxury tracking-wide uppercase leading-tight bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
              THE LUMIA ĐÀ NẴNG
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-amber-400 tracking-wider max-w-3xl mx-auto uppercase drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
              HỆ SINH THÁI DỊCH VỤ & THƯƠNG MẠI ĐẲNG CẤP
            </p>
          </div>

          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full max-w-xs px-4 pointer-events-auto z-20">
            <Button
              onClick={() =>
                document
                  .getElementById("chinh-sach-ban-hang")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black uppercase tracking-[0.2em] text-xs py-6 rounded-full transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.35)] border border-amber-300/40 hover:scale-105 active:scale-98"
            >
              XEM CHÍNH SÁCH ƯU ĐÃI
            </Button>

            <ChevronDown className="h-6 w-6 text-white animate-bounce drop-shadow-md" />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-1.5 bg-black/40 z-20">
          <div className="h-full w-1/4 bg-amber-500 rounded-r shadow-[0_0_10px_#f59e0b]" />
        </div>
      </section>

      <div className="flex flex-col">
        {/* ========================================================================= */}
        {/* 1B. CHÍNH SÁCH BÁN HÀNG */}
        {/* ========================================================================= */}
        <section
          id="chinh-sach-ban-hang"
          className="order-5 relative w-full bg-slate-950 py-16 md:py-24 border-b border-purple-950/30 overflow-hidden"
        >
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 10% 20%, rgba(88, 28, 135, 0.15) 0%, transparent 45%), 
                              radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)`,
            }}
          />

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-2xl overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(147,51,234,0.2)] bg-slate-900 border border-purple-500/20 p-2 group">
                  <Image
                    src="/GIACA.jpg"
                    alt="Chính sách giá bán và ưu đãi nhà phố xây sẵn"
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="w-full text-white space-y-6 text-left flex flex-col justify-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-purple-900/40 text-purple-300 border border-purple-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm mb-4">
                    <Sparkles className="h-3.5 w-3.5 text-purple-400" /> Chính
                    thức nhận Đặt chỗ Booking
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-cyan-200 uppercase tracking-wide leading-normal drop-shadow-sm">
                    CHÍNH SÁCH BÁN HÀNG & SUẤT NỘI BỘ ĐỢT 1
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded mt-2"></div>
                </div>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify font-medium">
                  Mở quỹ căn Đợt 1 phân khu thấp tầng{" "}
                  <span className="text-purple-400 font-bold">
                    The Lumia Đà Nẵng
                  </span>{" "}
                  với chính sách chiết khấu cộng dồn vô cùng hấp dẫn:
                </p>

                <ul className="space-y-4 text-base md:text-lg font-medium text-slate-200">
                  <li className="flex items-start gap-3 bg-purple-950/25 border border-purple-900/40 p-3 rounded-xl backdrop-blur-sm shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Đặt chỗ (Booking):</strong>{" "}
                      100 triệu/căn{" "}
                      <span className="text-slate-400 font-normal text-sm">
                        (Hoàn lại 100% nếu không khớp căn).
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Chiết khấu ưu đãi:</strong>{" "}
                      Tặng ngay <strong className="text-amber-400">2%</strong>{" "}
                      khi ráp căn đợt đầu; chiết khấu thêm{" "}
                      <strong className="text-amber-400">1%</strong> khi mua sỉ
                      từ 2 căn trở lên.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Thanh toán sớm:</strong>{" "}
                      Hưởng chiết khấu dòng tiền lên đến{" "}
                      <strong className="text-amber-400">8%/năm</strong> hoặc
                      giảm trực tiếp từ{" "}
                      <strong className="text-amber-400">3% – 7%</strong> giá
                      bán.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">
                        Đặc quyền bàn giao:
                      </strong>{" "}
                      Hỗ trợ ủy thác vận hành cho thuê sinh lời và bố trí xe đưa
                      đón tận nơi tại Sân bay Đà Nẵng tham quan dự án.
                    </span>
                  </li>
                </ul>

                <p className="text-xs md:text-sm text-slate-400 italic pt-1">
                  * Số lượng suất nội bộ có giới hạn. Vui lòng liên hệ Hotline
                  hoặc Đăng ký nhận bảng giá chi tiết ở biểu mẫu phía dưới.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. TIN TỨC THE LUMIA — XUẤT HIỆN TRÊN LANDING PAGE */}
        {/* ========================================================================= */}
        <section
          id="tin-tuc"
          className="order-6 w-full bg-white py-16 md:py-20 border-b border-slate-200"
        >
          <div className="container mx-auto flex max-w-7xl flex-col gap-6 px-4 md:px-6">
            <div className="space-y-2 border-b border-slate-200 pb-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-700">
                <Newspaper className="h-4 w-4" /> Tin tức The Lumia
              </p>
              <h2 className="max-w-3xl text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Tin tức và phân tích đầu tư The Lumia
              </h2>
              <p className="max-w-2xl text-sm md:text-base text-slate-600 leading-relaxed">
                Chọn bài viết bạn muốn đọc để xem thông tin vị trí, hạ tầng và
                cơ hội đầu tư theo góc nhìn thực tế.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() =>
                  setNewsStartIndex((prev) => Math.max(prev - 1, 0))
                }
                disabled={!canGoPrev}
                className="h-10 w-10 rounded-full border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="grid flex-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {visibleNewsCards.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/tin-tuc/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={600}
                      height={360}
                      className="h-32 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-amber-700 font-semibold">
                          {article.tag}
                        </p>
                        <Sparkles className="h-4 w-4 text-amber-600" />
                      </div>
                      <h3 className="mt-3 text-base md:text-lg font-semibold text-slate-900 leading-snug">
                        {article.title}
                      </h3>
                      <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1">
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
                          Đọc bài viết <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() =>
                  setNewsStartIndex((prev) =>
                    Math.min(prev + 1, featuredNewsCards.length - 4),
                  )
                }
                disabled={!canGoNext}
                className="h-10 w-10 rounded-full border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-amber-50 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. TỔNG QUAN DỰ ÁN */}
        {/* ========================================================================= */}
        <section
          id="tong-quan"
          className="order-1 py-16 md:py-24 container mx-auto px-4 border-b border-slate-100"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-title-luxury text-amber-700 uppercase tracking-wide leading-normal">
              TỔNG QUAN DỰ ÁN THE LUMIA ĐÀ NẴNG
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="flex flex-col justify-between py-2">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-justify mb-6">
                <span className="font-bold text-amber-700">
                  The Lumia Đà Nẵng
                </span>{" "}
                là phân khu đô thị sinh thái cao cấp tiên phong cho mô hình{" "}
                <span className="font-bold text-slate-900">All-in-one</span>{" "}
                tích hợp công nghệ thông minh 4.0 đầu tiên tại bờ bắc Thành phố
                Đà Nẵng. Sở hữu vị thế chiến lược đón đầu kỷ nguyên vươn mình
                của Cảng biển quốc tế Liên Chiểu, dự án mang lại cơ hội đầu tư
                an cư lý tưởng, sinh lời bền vững theo thời gian.
              </p>

              <div className="bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 flex-grow flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <Building2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-slate-700 leading-normal">
                    <strong className="text-slate-900 font-bold">
                      Chủ đầu tư uy tín:
                    </strong>{" "}
                    Công ty Cổ phần Đầu tư Sài Gòn – Đà Nẵng (SDN).
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-slate-700 leading-normal">
                    <strong className="text-slate-900 font-bold">
                      Đơn vị phát triển:
                    </strong>{" "}
                    Tập đoàn Saigontel Land.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-slate-700 leading-normal">
                    <strong className="text-slate-900 font-bold">
                      Vị trí đắc địa:
                    </strong>{" "}
                    Mặt tiền đường Nguyễn Tất Thành nối dài, Q.Liên Chiểu, TP.
                    Đà Nẵng.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Layers className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-slate-700 leading-normal">
                    <strong className="text-slate-900 font-bold">
                      Quy mô quỹ đất:
                    </strong>{" "}
                    69.87 Hecta — Mật độ xây dựng lý tưởng chỉ khoảng 30%.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold">
                      Cơ cấu loại hình:
                    </strong>{" "}
                    Nhà phố liền kề, Shophouse thương mại, Biệt thự sinh thái hồ
                    và Chung cư cao tầng.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <KeyRound className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg text-slate-700 leading-normal">
                    <strong className="text-slate-900 font-bold">
                      Pháp lý hoàn chỉnh:
                    </strong>{" "}
                    Đã cấp Giấy chứng nhận đăng ký đầu tư phê duyệt quy hoạch
                    hoàn toàn sạch.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200 aspect-[16/10]">
                <Image
                  src="/the-lumia-da-nang.jpg"
                  alt="Phối cảnh tổng thể dự án"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl border aspect-video shadow-sm">
                  <Image
                    src="/quy-hoach-du-an-the-lumia-da-nang.jpg"
                    alt="Bản đồ quy hoạch"
                    width={1600}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border aspect-video shadow-sm">
                  <Image
                    src="/canh-quan-tien-ich-the-lumia-da-nang.jpg"
                    alt="Cảnh quan công viên"
                    width={1600}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FIX TRIỆT ĐỂ LỖI ẨN CHỮ VÀ TỰ ĐỘNG XUỐNG DÒNG THEO IMAGE_F06C27.PNG */}
        {/* ========================================================================= */}
        <section className="order-1 bg-slate-50/60 py-16 w-full border-b border-slate-100">
          {/* Mở rộng tối đa container lên max-w-7xl để có đủ không gian cho chuỗi chữ dài */}
          <div className="container mx-auto px-4 max-w-7xl text-center space-y-6">
            {/* Tiêu đề chính: Đảm bảo độ rộng không bị bóp nghẹt, hiển thị đầy đủ 100% chữ */}
            <div className="w-full flex justify-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-red-600 uppercase whitespace-nowrap tracking-wide">
                NHẬN TRỌN BỘ TÀI LIỆU & CHÍNH SÁCH BÁN HÀNG MỚI NHẤT
              </h3>
            </div>

            {/* Dòng mô tả nhỏ: Thêm class whitespace-nowrap để ép chữ "tầng đẹp nhất" nằm thẳng hàng */}
            <div className="w-full flex justify-center">
              <p className="text-slate-600 text-xs md:text-sm font-medium italic leading-relaxed whitespace-nowrap">
                * Số lượng căn có hạn, quý khách hãy tải ngay bảng giá để chọn
                được căn có giá tốt nhất, tầng đẹp nhất.
              </p>
            </div>

            {/* Khối Form bọc khung màu trắng */}
            <div className="max-w-3xl mx-auto pt-2">
              <form
                onSubmit={handleDocSubmit}
                className="flex flex-col sm:flex-row gap-3 items-center justify-between w-full bg-white p-3 md:p-4 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100"
              >
                <div className="w-full sm:flex-1">
                  <Input
                    type="text"
                    placeholder="Họ và tên *"
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                    className="h-11 bg-slate-50/50 border-slate-200/60 text-slate-900 rounded-xl font-medium focus-visible:ring-red-500 placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="w-full sm:flex-1">
                  <Input
                    type="tel"
                    placeholder="Số điện thoại *"
                    value={docPhone}
                    onChange={(e) => setDocPhone(e.target.value)}
                    className="h-11 bg-slate-50/50 border-slate-200/60 text-slate-900 rounded-xl font-medium focus-visible:ring-red-500 placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="w-full sm:w-auto shrink-0">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm uppercase tracking-wider px-8 rounded-xl transition-all shadow-sm active:scale-98"
                  >
                    {isSubmitting ? "Đang xử lý..." : "Báo Quỹ Căn Đẹp"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. VỊ TRÍ CHI TIẾT CHIẾN LƯỢC QUẬN LIÊN CHIỂU */}
        {/* ========================================================================= */}
        <section
          id="vi-tri"
          className="order-2 py-16 md:py-20 bg-slate-800 text-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl relative z-10">
            <div className="space-y-4 w-full flex flex-col justify-between py-1">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-4xl font-bold font-title-luxury text-amber-500 flex items-center gap-2 uppercase leading-normal">
                  <MapPin className="h-7 w-7 text-amber-500" /> VỊ TRÍ KIM CƯƠNG
                  LIÊN CHIỂU
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded"></div>

                <div className="text-slate-200 text-justify text-sm md:text-base space-y-3 leading-relaxed font-medium">
                  <p>
                    <strong className="text-white">The Lumia Đà Nẵng</strong>{" "}
                    tọa lạc đắc địa tại mặt đường Nguyễn Tất Thành nối dài, trục
                    kinh tế huyết mạch kết nối giao thương giữa trung tâm thành
                    phố và Cảng biển quốc tiế Liên Chiểu.
                  </p>
                  <p>
                    Liên Chiểu là quận kinh tế mới sở hữu tiềm lực phát triển
                    vượt trội cùng lúc cả 3 mũi nhọn:{" "}
                    <span className="text-amber-400 font-semibold">
                      Công nghiệp sạch — Logistics hàng hải — Du lịch cảnh quan
                      sinh thái sinh khí
                    </span>
                    . Đảm bảo cho biên độ tăng trưởng đất nền thấp tầng trong
                    tương lai gần.
                  </p>
                </div>
              </div>

              <div className="w-full space-y-2 pt-2">
                <div className="text-amber-500 font-bold text-xs md:text-sm pl-1 tracking-wide uppercase">
                  Mốc liên kết vùng (Cách biển 5 phút):
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-slate-900/60 border border-slate-700/50 p-2.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-900/90 transition-colors">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm font-medium text-slate-200 leading-normal">
                        ĐH Bách Khoa, ĐH Sư Phạm, Chợ Nam Ô, THPT Đàm Quang
                        Trung
                      </span>
                    </div>
                    <div className="shrink-0 pl-2">
                      <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">
                        5 phút
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-700/50 p-2.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-900/90 transition-colors">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm font-medium text-slate-200 leading-normal">
                        Cảng biển quốc tế Liên Chiểu, KDL Nam Ô, Công viên
                        Mikazuki
                      </span>
                    </div>
                    <div className="shrink-0 pl-2">
                      <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">
                        10 phút
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-700/50 p-2.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-900/90 transition-colors">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm font-medium text-slate-200 leading-normal">
                        Bến xe trung tâm thành phố, Cầu vượt Ngã ba Huế
                      </span>
                    </div>
                    <div className="shrink-0 pl-2">
                      <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">
                        15 phút
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-700/50 p-2.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-900/90 transition-colors">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm font-medium text-slate-200 leading-normal">
                        Sân bay quốc tế Đà Nẵng, Cầu Sông Hàn, Trung tâm hành
                        chính
                      </span>
                    </div>
                    <div className="shrink-0 pl-2">
                      <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap">
                        20 phút
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 w-full flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 aspect-[16/10] bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Fzm_wCHbuak"
                  title="The Lumia Đà Nẵng"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 aspect-[16/10]">
                <Image
                  src="/vi-tri-the-lumia-da-nang.jpg"
                  alt="Bản đồ liên kết vùng dự án The Lumia"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover hover:scale-[1.012] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. LÝ DO VÀNG ĐỂ SỞ HỮU THE LUMIA */}
        {/* ========================================================================= */}
        <section className="order-3 py-20 container mx-auto px-4 max-w-7xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black font-title-luxury text-amber-700 uppercase tracking-wide leading-normal">
              LÝ DO VÀNG ĐỂ SỞ HỮU THE LUMIA
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="w-full lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 p-2">
                <Image
                  alt="Lý do để sở hữu dự án Lumia Đà Nẵng sơ đồ"
                  loading="lazy"
                  decoding="async"
                  src="/CIRCLE-838x800.png"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            </div>

            <div className="w-full lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-2.5 bg-red-100 text-red-600 rounded-xl shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 mb-1">
                    LƯA CHỌN HOÀN HẢO
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify">
                    Biệt thự, shophouse, liền kề diện tích lớn, tầm nhìn khoáng
                    đạt bên mặt hồ, biên độ tăng giá phi mã đã hiện hữu rõ nét.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-2.5 bg-red-100 text-red-600 rounded-xl shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 mb-1">
                    VỊ TRÍ ĐẮC ĐỊA
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify">
                    Tọa lạc mặt tiền đường Nguyễn Tất Thành nối dài, hạ tầng
                    đồng bộ vượt trội, cách bãi tắm biển chỉ đúng 5 phút di
                    chuyển.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-2.5 bg-red-100 text-red-600 rounded-xl shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 mb-1">
                    TÂM ĐIỂM XANH AN LÀNH
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify">
                    Mật độ xây dựng lý tưởng chỉ 30%, bao bọc xung quanh là
                    chuỗi công viên cây xanh chủ đề ngập tràn năng lượng sinh
                    khí.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-2.5 bg-red-100 text-red-600 rounded-xl shrink-0">
                  <Gem className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 mb-1">
                    TIỆN ÍCH CAO CẤP
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify">
                    Đem lại đầy đủ chuỗi tiện nghi thượng lưu đặc quyền, tận
                    hưởng phong cách sống resort nghỉ dưỡng 5 sao tại tổ ấm.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-2.5 bg-red-100 text-red-600 rounded-xl shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 mb-1">
                    TÂM ĐIỂM THỊNH VƯỢNG
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify">
                    Thừa hưởng trọn vẹn hạ tầng Liên Chiểu với hệ thống trường
                    liên cấp, bệnh viện quốc tế và trung tâm thương mại sầm uất.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-2.5 bg-red-100 text-red-600 rounded-xl shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 mb-1">
                    PHÁP LÝ & TIẾN ĐỘ
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify">
                    Hồ sơ pháp lý hoàn thiện minh bạc, tiến độ thi công hạ tầng
                    thần tốc vượt kế hoạch mang lại sự an tâm tuyệt đối.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. THIẾT KẾ MẶT BẰNG & PHÂN KHU THẤP TẦNG GIAI ĐOẠN 1 */}
        {/* ========================================================================= */}
        <section
          id="mat-bang"
          className="order-4 py-20 bg-slate-50 border-y border-slate-200"
        >
          <div className="container mx-auto px-4 max-w-5xl space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-black font-title-luxury text-amber-700 uppercase leading-normal">
                THIẾT KẾ — TỔNG MẶT BằNG DỰ ÁN
              </h2>
              <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
                Mang phong cách kiến trúc hiện đại, các sản phẩm được thiết kế
                tinh tế theo hướng sang trọng, thanh nhã, tối ưu hóa công năng
                kết hợp hoàn hảo giữa kinh doanh buôn bán thương mại và an cư
                lập nghiệp.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-md border bg-white p-2">
              <Image
                src="/tong-mat-bang-the-lumia-da-nang.jpg"
                alt="Mặt bằng chi tiết phân lô"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-6">
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl flex flex-col justify-center lg:col-span-1">
                <h4 className="text-lg font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Giai đoạn 1 thấp tầng
                </h4>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed text-justify">
                  Bao gồm{" "}
                  <span className="font-bold text-white">970 sản phẩm</span>{" "}
                  biệt thự, liền kề, shophouse lấy cảm hứng từ những chòm sao
                  rực rỡ của dải Ngân Hà, chia thành 4 tiểu khu:{" "}
                  <span className="text-amber-400 font-semibold">
                    Asia Town, The Astra, The Orion và The Vega
                  </span>{" "}
                  ôm trọn mặt hồ cảnh quan rộng 1.6ha.
                </p>
              </div>
              <div className="border rounded-2xl overflow-hidden shadow-sm bg-white lg:col-span-2">
                <Table>
                  <TableHeader className="bg-slate-800">
                    <TableRow>
                      <TableHead className="font-bold text-white py-3 pl-4">
                        Dòng sản phẩm thấp tầng
                      </TableHead>
                      <TableHead className="font-bold text-white py-3">
                        Số lượng mở bán đợt 1
                      </TableHead>
                      <TableHead className="font-bold text-white py-3 text-right pr-4">
                        Giá bán kế hoạch
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-sm md:text-base font-semibold text-slate-700">
                    <TableRow>
                      <TableCell className="pl-4">
                        Biệt thự sinh thái mặt hồ
                      </TableCell>
                      <TableCell>133 căn độc bản</TableCell>
                      <TableCell className="text-right pr-4 text-amber-700 font-bold">
                        Chỉ từ 5x triệu/m²
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="pl-4">
                        Nhà phố liền kề tối ưu
                      </TableCell>
                      <TableCell>747 căn đa năng</TableCell>
                      <TableCell className="text-right pr-4 text-amber-700 font-bold">
                        Chỉ từ 5x triệu/m²
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="pl-4">
                        Boutique Shophouse mặt trục chính
                      </TableCell>
                      <TableCell>90 căn sôi động</TableCell>
                      <TableCell className="text-right pr-4 text-amber-700 font-bold">
                        Chỉ từ 5x triệu/m²
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="pl-4 text-amber-900 font-bold">
                        Căn hộ chung cư cao tầng
                      </TableCell>
                      <TableCell>1.290 căn hộ 4 block</TableCell>
                      <TableCell className="text-right pr-4 text-emerald-700 font-bold">
                        Chỉ từ 4x triệu/m²
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. HỆ THỐNG TIỆN ÍCH ALL-IN-ONE & TABS PHỐI CẢNH THỰC TẾ */}
        {/* ========================================================================= */}
        <section
          id="tien-do"
          className="order-3 py-16 md:py-24 bg-slate-950 text-white"
        >
          <div className="container mx-auto px-4 max-w-5xl space-y-14">
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black font-title-luxury text-amber-500 uppercase tracking-wide leading-normal">
                HỆ TIỆN ÍCH ALL-IN-ONE LẦN ĐẦU TIÊN CÓ MẶT TẠI THÀNH PHỐ ĐÀ NẴNG
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded mx-auto mt-2"></div>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify sm:text-center font-medium pt-2">
                Với <strong>The Lumia Da Nang</strong>, lần đầu tiên tại Thành
                phố đáng sống bậc nhất Việt Nam, có một Khu đô thị được tích hợp
                chuẩn sống quốc tế với{" "}
                <strong>Hệ sinh thái tiện ích All – in – one</strong> đáp ứng
                trọn vẹn mọi nhu cầu của cư dân với chất lượng cao nhất. Đó là
                một khu đô thị sinh thái có đầy đủ mọi thứ từ các công viên,
                trường học cho đến bệnh viện, trung tâm thương mại, các khu phố
                sầm uất hay các tiện ích vui chơi giải trí và công viên cây xanh
                tràn đầy sinh khí và năng lượng.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-3 border border-slate-800 shadow-2xl">
              <Tabs defaultValue="images" className="w-full">
                <div className="w-full flex justify-center pb-2">
                  <TabsList className="inline-flex items-center bg-slate-950 p-1.5 rounded-2xl h-auto gap-1">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-slate-300 hover:text-white text-xs md:text-sm font-bold py-2.5 px-5 rounded-xl transition-all"
                    >
                      Các Phân Khu
                    </TabsTrigger>
                    <TabsTrigger
                      value="facilities"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-slate-300 hover:text-white text-xs md:text-sm font-bold py-2.5 px-5 rounded-xl transition-all"
                    >
                      Hệ Sinh Thái
                    </TabsTrigger>
                    <TabsTrigger
                      value="images"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-slate-300 hover:text-white text-xs md:text-sm font-bold py-2.5 px-5 rounded-xl transition-all"
                    >
                      Phối cảnh thực tế
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent
                  value="overview"
                  className="p-6 md:p-8 space-y-6 focus-visible:outline-none"
                >
                  <div className="rounded-2xl overflow-hidden border border-slate-800 mb-4 aspect-video shadow-md">
                    <Image
                      src="/tong-mat-bang-the-lumia-da-nang.jpg"
                      alt="Tổng mặt bằng dự án"
                      width={1600}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-slate-200 text-base md:text-lg text-justify leading-relaxed">
                    <strong>Giai đoạn 1 dự án The Lumia Đà Nẵng</strong> bao gồm
                    tổng số 970 căn biệt thự, liền kề và nhà phố shophouse. Lấy
                    cảm hứng dựa trên ý tưởng từ những chòm sao của dải Ngân Hà,
                    giai đoạn 1 được chia thành 4 phân khu thấp tầng là Asia
                    Town, The Astra, The Orion và The Vega.
                  </p>
                </TabsContent>

                <TabsContent
                  value="facilities"
                  className="p-6 md:p-8 space-y-4 text-base md:text-lg text-slate-200 focus-visible:outline-none text-justify leading-relaxed"
                >
                  <div className="rounded-2xl overflow-hidden border border-slate-800 mb-4 aspect-video shadow-md">
                    <Image
                      src="/cac-phan-khu-giai-doan-1-the-lumia-da-nang.jpg"
                      alt="Mặt bằng phân khu"
                      width={1600}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>
                    Các phân khu nằm ôm trọn lấy Hồ cảnh quan trung tâm rộng tới
                    1.6ha cùng hệ thống công viên cây xanh, quảng trường trung
                    tâm rực rỡ và hệ sinh thái tiện ích đa dạng tiêu chuẩn quốc
                    tế. Nổi bật tại tâm điểm chính là tiểu khu Orion với các căn
                    biệt thự hạng sang xa xỉ, bao bọc xung quanh là 3 phân khu
                    Asia Town, The Astra và The Vega với các dãy nhà phố
                    shophouse sôi động được đặt tại các trục lộ giao thông
                    chính.
                  </p>
                </TabsContent>

                <TabsContent
                  value="images"
                  className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 focus-visible:outline-none"
                >
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/benh-vien-quoc-te-the-lumia-da-nang.jpg"
                        alt="Bệnh viện"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Bệnh viện quốc tế Lumia
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/truong-hoc-quoc-te-the-lumia-da-nang.jpg"
                        alt="Trường học"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Trường học quốc tế liên cấp
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/trung-tam-thuong-mai-the-lumia-da-nang.jpg"
                        alt="Trung tâm thương mại"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Đại trung tâm thương mại sầm uất
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/tuyen-pho-thuong-mai-the-lumia-da-nang.jpg"
                        alt="Tuyến phố"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Tuyến phố Shophouse kinh doanh
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/cong-vien-chu-de-the-lumia-da-nang.jpg"
                        alt="Công viên"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Công viên cây xanh chủ đề
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/ho-canh-quan-the-lumia-da-nang.jpg"
                        alt="Hồ cảnh quan"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Hồ điều hòa trung tâm 1.6ha
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/san-tap-golf-the-lumia-da-nang.jpg"
                        alt="Sân golf"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Sân tập Golf đẳng cấp
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/san-the-thao-the-lumia-da-nang.jpg"
                        alt="Sân thê thao"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Khu thể thao phức hợp ngoài trời
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/san-choi-tre-em-the-lumia-da-nang.jpg"
                        alt="Sân chơi"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Sân chơi phát triển tư duy trẻ em
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/rap-chieu-phim-ngoai-troi-the-lumia-da-nang.jpg"
                        alt="Rạp phim"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Rạp chiếu phim ngoài trời
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/khu-cam-trai-the-lumia-da-nang.jpg"
                        alt="Camping"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Khu cắm trại Camping sinh thái
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] shadow-md bg-slate-900">
                      <Image
                        src="/clubhouse-the-lumia-da-nang.jpg"
                        alt="Clubhouse"
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-semibold text-center mt-1">
                      Clubhouse đặc quyền thượng lưu
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* POPUP FLOATING STICKY BUTTON — ĐÃ FIX: Chỉ hiển thị khi scroll xuống qua Banner */}
      {/* ========================================================================= */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto transition-all duration-500 ease-in-out ${
          showSticky
            ? "opacity-100 translate-y-0 scale-100 visible"
            : "opacity-0 translate-y-10 scale-95 invisible pointer-events-none"
        }`}
      >
        <Dialog open={isStickyOpen} onOpenChange={setIsStickyOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2.5 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 hover:from-amber-200 hover:to-amber-300 text-amber-950 font-black text-xs md:text-sm tracking-wider uppercase px-6 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2 border-white/60 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 animate-bounce [animation-duration:3s]">
              <div className="p-1 bg-amber-600 text-white rounded-md shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold drop-shadow-sm whitespace-nowrap leading-none mb-0.5">
                  BẢNG GIÁ + CHÍNH SÁCH
                </span>
                <span className="text-[9px] lowercase text-amber-800 font-semibold tracking-normal leading-none">
                  Mới Nhất 06/2026
                </span>
              </div>
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg bg-white p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-2xl focus-visible:outline-none">
            <RegisterDialog onSuccess={() => setIsStickyOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <ZaloIcon />
      <PhoneIcon />
      <ScrollUp />
    </div>
  );
};

export default NewLanding;
