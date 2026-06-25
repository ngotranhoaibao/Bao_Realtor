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
import ZaloIcon from "@/components/ZaloIcon";
import PhoneIcon from "@/components/PhoneIcon";
import ScrollUp from "@/components/ScrollUp";
import Header from "@/components/Header";
import toast from "react-hot-toast";
import { submitContact } from "@/services/api/contact";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  MapPin,
  Sparkles,
  Heart,
  Gem,
  Award,
  ArrowRight,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  Phone,
  ChevronDown,
  Gift,
  PenTool,
  Coins,
  Percent,
  Building2,
  Layers,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const featuredNewsCards = newsArticles;

const NewLanding = () => {
  const [isStickyOpen, setIsStickyOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [newsStartIndex, setNewsStartIndex] = useState(0);

  // State quản lý Form tài liệu bổ sung (Giữa trang)
  const [docName, setDocName] = useState("");
  const [docPhone, setDocPhone] = useState("");

  // State quản lý Form Đăng ký tư vấn (Phần Tổng quan)
  const [overviewName, setOverviewName] = useState("");
  const [overviewPhone, setOverviewPhone] = useState("");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = async (name, phone, message, clearInputs) => {
    if (!name || !phone) {
      toast.error("Vui lòng nhập đầy đủ Họ tên và Số điện thoại.");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        message: message,
      };
      await submitContact(payload);
      toast.success("Đăng ký thành công! Thông tin đang được gửi tới bạn.");
      clearInputs();
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
      <Header />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .font-title-luxury {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. HERO SLIDER BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-between bg-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/50" />

        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-between py-24 z-10 text-white pointer-events-none">
          <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full max-w-xs px-4 pointer-events-auto z-20">
            <Button
              onClick={() =>
                document
                  .getElementById("chinh-sach-ban-hang")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black uppercase tracking-[0.2em] text-xs py-6 rounded-full transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.35)] border border-amber-300/40 hover:scale-105 active:scale-98"
            >
              XEM CHÍNH SÁCH ƯU ĐÃI
            </Button>
            <ChevronDown className="h-6 w-6 text-white animate-bounce drop-shadow-md" />
          </div>
        </div>
      </section>

      <div className="flex flex-col">
        {/* ========================================================================= */}
        {/* 2. TỔNG QUAN DỰ ÁN */}
        {/* ========================================================================= */}
        <section
          id="tong-quan"
          className="order-1 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100"
        >
          <div className="container mx-auto px-4 max-w-7xl space-y-12">
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <span className="text-amber-600 text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
                Biểu tượng sống mới tại Nam Đà Nẵng
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-title-luxury text-slate-900 uppercase tracking-wide leading-tight pt-1">
                TỔNG QUAN DỰ ÁN S-LIGHT TOWER
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded"></div>
              <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg font-medium leading-relaxed pt-1">
                <span className="font-bold text-slate-900">
                  S - Light Tower
                </span>{" "}
                là tổ hợp căn hộ hạng sang đẳng cấp quốc tế thuộc đại đô thị Sun
                NeO City, kiến tạo không gian sống đỉnh cao soi bóng bên dải
                nước lãng mạn vô giá của dòng sông Hàn thơ mộng.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="w-full lg:col-span-7 flex flex-col justify-between gap-4">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-5 md:p-6 text-white shadow-md flex items-center justify-between gap-4 border border-slate-800">
                  <div className="space-y-1">
                    <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Tên thương mại chính thức
                    </p>
                    <h3 className="text-xl md:text-2xl font-black tracking-wide font-title-luxury">
                      S - LIGHT TOWER ĐÀ NẴNG
                    </h3>
                  </div>
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
                    <Award className="w-6 h-6 shrink-0" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <Building2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Chủ đầu tư uy tín</span>
                    </div>
                    <p className="text-slate-900 font-extrabold text-sm md:text-base">
                      Sun Property
                    </p>
                    <p className="text-slate-500 text-xs font-semibold">
                      (Thành viên chiến lược Tập đoàn Sun Group)
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Vị trí kim cương</span>
                    </div>
                    <p className="text-slate-900 font-extrabold text-sm md:text-base line-clamp-1">
                      Trục 29/3 & Nguyễn Đình Thi
                    </p>
                    <p className="text-slate-500 text-xs font-semibold">
                      KĐT Sun NeO City, Hòa Xuân, Cẩm Lệ
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Quy mô xây dựng</span>
                    </div>
                    <p className="text-slate-900 font-extrabold text-sm md:text-base">
                      Khu đất vàng rộng 4.650m²
                    </p>
                    <p className="text-slate-500 text-xs font-semibold">
                      02 Tòa tháp cao 22 tầng nổi & 2 tầng hầm
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Cơ cấu sản phẩm</span>
                    </div>
                    <p className="text-slate-900 font-extrabold text-sm md:text-base">
                      Tổng số 1.281 căn hộ
                    </p>
                    <p className="text-slate-500 text-xs font-semibold">
                      Studio, 1BR+, 2BR, 3BR, Penthouse
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Ý tưởng kiến trúc</span>
                    </div>
                    <p className="text-slate-900 font-extrabold text-sm md:text-base">
                      Thiết kế biểu tượng cao quý
                    </p>
                    <p className="text-slate-500 text-xs font-semibold">
                      Được chắp bút bởi đơn vị danh tiếng Aedas
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all space-y-2">
                    <div className="flex items-center gap-2.5 text-slate-500 font-bold text-xs uppercase tracking-wider">
                      <TrendingUp className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Tiến độ dự kiến</span>
                    </div>
                    <p className="text-slate-900 font-extrabold text-sm md:text-base">
                      Khởi công Quý II/2026
                    </p>
                    <p className="text-slate-500 text-xs font-semibold">
                      Dự kiến bàn giao vào Quý IV/2027
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 shadow-inner">
                  <div className="p-2 bg-emerald-600 text-white rounded-xl">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                      Pháp lý dự án an tâm tuyệt đối
                    </p>
                    <p className="text-emerald-700 font-black text-sm md:text-base">
                      HÌNH THỨC SỞ HỮU LÂU DÀI{" "}
                      <span className="text-slate-700 font-medium text-xs md:text-sm">
                        (Cấp sổ hồng riêng từng căn hộ)
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:col-span-5 flex">
                <div className="w-full overflow-hidden rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-200/60 bg-white p-2.5 flex group transition-all duration-300">
                  <Image
                    src="/images/Tong-quan-du-an-can-ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                    alt="Phối cảnh tháp đôi căn hộ hạng sang S-Light Tower Sun Group"
                    width={1000}
                    height={1200}
                    priority
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.015] transition-transform duration-700 min-h-[380px] lg:min-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CHÍNH SÁCH BÁN HÀNG ĐẲNG CẤP & BIỂU MẪU ĐĂNG KÝ BÁO GIÁ QUỸ CĂN */}
        {/* ========================================================================= */}
        <section
          id="chinh-sach-ban-hang"
          className="order-2 relative w-full bg-slate-950 py-20 md:py-28 border-b border-purple-950/30 overflow-hidden"
        >
          <div className="absolute top-12 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl relative z-10 space-y-16">
            <div className="w-full text-center space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-purple-900/40 text-purple-300 border border-purple-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                Chính sách bán hàng dự kiến tại S - Light Tower
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-cyan-200 uppercase tracking-wide leading-tight font-title-luxury max-w-5xl mx-auto">
                ĐẦU TƯ ƯU THẾ VƯỢT TRỘI – CƠ HỘI SỞ HỮU NHỮNG CĂN HỘ ĐẲNG CẤP
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded mt-4 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              <div className="w-full lg:col-span-7 flex flex-col justify-between gap-6 text-white order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 to-purple-900/20 border border-purple-500/20 p-5 md:px-6 shadow-sm flex items-center gap-4 backdrop-blur-sm hover:border-purple-500/30 transition-all">
                    <div className="p-2 bg-purple-900/60 text-purple-300 rounded-xl shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <p className="text-sm md:text-base font-bold text-white tracking-wide">
                      Tặng 36 tháng phí dịch vụ quản lý vận hành chuẩn{" "}
                      <span className="whitespace-nowrap">cao cấp.</span>
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 to-purple-900/20 border border-purple-500/20 p-5 md:px-6 shadow-sm flex items-center gap-4 backdrop-blur-sm hover:border-purple-500/30 transition-all">
                    <div className="p-2 bg-purple-900/60 text-purple-300 rounded-xl shrink-0">
                      <Gift className="w-4 h-4" />
                    </div>
                    <p className="text-sm md:text-base font-bold text-white tracking-wide">
                      Chính sách Gói quà tặng chi tiêu hệ sinh thái đa ngành{" "}
                      <span className="whitespace-nowrap">cao cấp</span> của Sun
                      Group.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 to-purple-900/20 border border-purple-500/20 p-5 md:px-6 shadow-sm flex items-center gap-4 backdrop-blur-sm hover:border-purple-500/30 transition-all">
                    <div className="p-2 bg-purple-900/60 text-purple-300 rounded-xl shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <p className="text-sm md:text-base font-bold text-white tracking-wide">
                      Chính sách Khách hàng thân thiết Sun Group (Sol Club) ưu
                      đãi chiết khấu căn thứ 02.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-2xl bg-slate-900/40 border border-purple-900/30 p-5 md:p-6 shadow-xl flex flex-col justify-between group hover:border-amber-500/30 transition-all">
                    <div className="flex items-center gap-2.5 mb-2.5 text-amber-400 font-extrabold text-sm md:text-base">
                      <Gift className="w-5 h-5 shrink-0" />
                      <span>Quà tặng đến 100 Triệu</span>
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed text-justify">
                      Nhận ngay ưu đãi chiết khấu thẳng 100 triệu đồng trực tiếp
                      vào văn bản giá bán ngay khi sở hữu căn hộ.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/40 border border-purple-900/30 p-5 md:p-6 shadow-xl flex flex-col justify-between group hover:border-amber-500/30 transition-all">
                    <div className="flex items-center gap-2.5 mb-2.5 text-amber-400 font-extrabold text-sm md:text-base">
                      <PenTool className="w-5 h-5 shrink-0" />
                      <span>Ký ngay HĐMB năm 2026</span>
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed text-justify">
                      Hồ sơ pháp lý hoàn thiện tuyệt đối, khách hàng đủ điều
                      kiện ký ngay hợp đồng mua bán chính thức trong năm 2026.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/40 border border-purple-900/30 p-5 md:p-6 shadow-xl flex flex-col justify-between group hover:border-purple-400/30 transition-all">
                    <div className="flex items-center gap-2.5 mb-2.5 text-purple-300 font-extrabold text-sm md:text-base">
                      <Coins className="w-5 h-5 shrink-0" />
                      <span>Phương án không vay vốn</span>
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed text-justify">
                      Chiết khấu ngay 2% cho khách hàng thanh toán bằng vốn tự
                      có + Chiết khấu dòng tiền 10%/năm thanh toán sớm.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/40 border border-purple-900/30 p-5 md:p-6 shadow-xl flex flex-col justify-between group hover:border-purple-400/30 transition-all">
                    <div className="flex items-center gap-2.5 mb-2.5 text-purple-300 font-extrabold text-sm md:text-base">
                      <Percent className="w-5 h-5 shrink-0" />
                      <span>Chính sách hỗ trợ lãi suất</span>
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed text-justify">
                      Gói giải ngân đồng hành thông minh, hỗ trợ vay vốn ưu đãi
                      cùng cam kết hỗ trợ lãi suất 0% từ chủ đầu tư.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-950/20 border border-purple-900/40 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-semibold text-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>
                      Tỷ lệ vay ngân hàng tối đa:{" "}
                      <span className="text-white font-black text-sm">70%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>
                      Thời gian hỗ trợ lãi suất 0%:{" "}
                      <span className="text-white font-black text-sm">
                        30 tháng
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>
                      Thời gian ân hạn nợ gốc:{" "}
                      <span className="text-white font-black text-sm">
                        36 tháng
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-cyan-300">
                      Miễn phí trả nợ trước hạn trong thời gian HTLS
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:col-span-5 flex flex-col justify-between gap-6 order-1 lg:order-2">
                <div className="w-full bg-slate-900/90 border border-purple-500/20 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-black text-amber-400 uppercase tracking-wide">
                      NHẬN BÁO GIÁ QUỸ CĂN VIEW SÔNG
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm font-semibold">
                      Quý khách đang quan tâm tới loại hình nào?
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const target = e.target;
                      const selectedType = target.elements.propertyType.value;
                      handleFormSubmit(
                        overviewName,
                        overviewPhone,
                        `Yêu cầu báo giá quỹ căn loại hình: ${selectedType}`,
                        () => {
                          setOverviewName("");
                          setOverviewPhone("");
                        },
                      );
                    }}
                    className="space-y-5"
                  >
                    <Input
                      type="text"
                      placeholder="Họ và tên của bạn *"
                      value={overviewName}
                      onChange={(e) => setOverviewName(e.target.value)}
                      className="h-12 bg-white border-2 border-amber-400 text-slate-950 font-extrabold rounded-xl focus-visible:ring-2 focus-visible:ring-amber-500 placeholder:text-slate-400 text-sm shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Số điện thoại liên hệ *"
                      value={overviewPhone}
                      onChange={(e) => setOverviewPhone(e.target.value)}
                      className="h-12 bg-white border-2 border-amber-400 text-slate-950 font-extrabold rounded-xl focus-visible:ring-2 focus-visible:ring-amber-500 placeholder:text-slate-400 text-sm shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                      required
                    />

                    <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4.5 space-y-3.5">
                      <label className="flex items-center gap-3 cursor-pointer group text-slate-300 hover:text-white text-xs md:text-sm font-semibold transition-colors">
                        <input
                          type="radio"
                          name="propertyType"
                          value="Căn hộ cao cấp"
                          defaultChecked
                          className="w-4 h-4 accent-amber-500 cursor-pointer scale-105"
                        />
                        <span>Căn hộ cao cấp</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group text-slate-300 hover:text-white text-xs md:text-sm font-semibold transition-colors">
                        <input
                          type="radio"
                          name="propertyType"
                          value="Townhouse kinh doanh"
                          className="w-4 h-4 accent-amber-500 cursor-pointer scale-105"
                        />
                        <span>Townhouse kinh doanh</span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black uppercase tracking-widest text-xs md:text-sm rounded-xl transition-all shadow-md active:scale-98"
                    >
                      {isSubmitting
                        ? "Đang gửi đăng ký..."
                        : "NHẬN BÁO GIÁ DỰ ÁN"}
                    </Button>
                  </form>

                  <p className="text-[10px] text-slate-400 italic text-center pt-1">
                    * Mọi thông tin của quý khách hàng được bảo mật tuyệt đối.
                  </p>
                </div>

                {/* Video Youtube dự án đặt ngay dưới form (Thay cho ảnh trước đây) */}
                <div className="w-full overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] bg-slate-900 border border-purple-500/20 p-1.5 group aspect-video relative">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/6xBaOvtmrSs?rel=0&modestbranding=1&playsinline=1"
                    title="S-LIGHT TOWER VIDEO"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic text-center lg:text-left leading-normal pt-4">
              * Lưu ý: Các điều khoản chính sách trên dựa trên văn bản kế hoạch
              dự kiến và có thể được điều chỉnh theo công văn ban hành chính
              thức của chủ đầu tư theo từng block giỏ hàng.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FORM NHẬN TÀI LIỆU BIỂU MẪU GIỮA TRANG */}
        {/* ========================================================================= */}
        <section className="order-3 bg-slate-50/60 py-16 w-full border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-7xl text-center space-y-6">
            <div className="w-full flex justify-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-red-600 uppercase tracking-wide">
                NHẬN TRỌN BỘ TÀI LIỆU & CHÍNH SÁCH BÁN HÀNG S-LIGHT TOWER MỚI
                NHẤT
              </h3>
            </div>
            <div className="w-full flex justify-center">
              <p className="text-slate-600 text-xs md:text-sm font-medium italic leading-relaxed">
                * Quỹ căn vị trí đắc địa, hướng view sông tuyệt đẹp có số lượng
                giới hạn, quý khách hãy tải ngay bảng giá để chọn căn tầng ưng ý
                nhất.
              </p>
            </div>

            <div className="max-w-3xl mx-auto pt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit(
                    docName,
                    docPhone,
                    "Yêu cầu nhận trọn bộ tài liệu & quỹ căn đẹp giữa trang dự án S-Light Tower",
                    () => {
                      setDocName("");
                      setDocPhone("");
                    },
                  );
                }}
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
        {/* 4. VỊ TRÍ CHI TIẾT CHIẾN LƯỢC */}
        {/* ========================================================================= */}
        <section
          id="vi-tri"
          className="order-4 py-16 md:py-20 bg-slate-800 text-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl relative z-10">
            <div className="space-y-5 w-full flex flex-col justify-center py-1">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-title-luxury text-amber-500 flex items-center gap-2 uppercase leading-snug">
                  <MapPin className="h-7 w-7 text-amber-500" /> TÂM ĐIỂM VƯỢNG
                  KHÍ NAM ĐÀ NẴNG
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded"></div>
                <div className="text-slate-200 text-justify text-sm md:text-base space-y-3.5 leading-relaxed font-medium pt-2">
                  <p>
                    <strong className="text-white">S-Light Tower</strong> sở hữu
                    tọa độ kim cương ngay ngã tư huyết mạch đường Nguyễn Đình
                    Thi và trục lộ 29/3, đóng vai trò cửa ngõ kết nối toàn diện
                    của quần thể đô thị đáng sống Sun NeO City tại khu Nam thành
                    phố.
                  </p>
                  <p>
                    Dự án nắm giữ vị thế "minh đường tụ thủy" độc bản có một
                    không hai tại ngã ba sông nơi giao thoa của 3 dòng chảy:{" "}
                    <span className="text-amber-400 font-semibold">
                      Sông Cẩm Lệ — Sông Hàn — Sông Đô Tỏa
                    </span>
                    . Địa thế ba mặt ôm sông đem lại tầm nhìn Panorama 360 độ
                    ngắm trọn dải nước lãng mạn vô giá, núi non hùng vĩ và cảnh
                    quan đô thị phồn hoa.
                  </p>
                </div>
              </div>

              <div className="w-full space-y-3.5 pt-3">
                <div className="text-amber-500 font-bold text-xs md:text-sm pl-1 tracking-wide uppercase">
                  Mốc liên kết vùng hạ tầng giao thông kết nối nhanh:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="bg-slate-950/50 border border-slate-700/40 p-3.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-950/80 transition-colors">
                    <span className="text-xs md:text-sm font-medium text-slate-200">
                      Quận Hải Châu, Trung tâm hành chính, Siêu thị Mega Market,
                      Bệnh viện Quốc tế
                    </span>
                    <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap shrink-0">
                      5 - 10 phút
                    </span>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-700/40 p-3.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-950/80 transition-colors">
                    <span className="text-xs md:text-sm font-medium text-slate-200">
                      Sân bay Quốc tế Đà Nẵng, Danh thắng núi Ngũ Hành Sơn
                    </span>
                    <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap shrink-0">
                      10 phút
                    </span>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-700/40 p-3.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-950/80 transition-colors">
                    <span className="text-xs md:text-sm font-medium text-slate-200">
                      Bãi biển Mỹ Khê sầm uất (Qua trục kết nối tương lai cầu
                      Bùi Tá Hán)
                    </span>
                    <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap shrink-0">
                      15 phút
                    </span>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-700/40 p-3.5 rounded-xl flex items-center justify-between gap-4 hover:bg-slate-950/80 transition-colors">
                    <span className="text-xs md:text-sm font-medium text-slate-200">
                      Quần thể kiến trúc du lịch di sản văn hóa Phố cổ Hội An
                    </span>
                    <span className="text-amber-400 font-bold text-xs md:text-sm whitespace-nowrap shrink-0">
                      25 phút
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: Bản đồ và Ảnh xếp dọc vững chãi */}
            <div className="grid grid-cols-1 gap-5 w-full h-full justify-between">
              {/* Bản đồ Google Maps thay cho ảnh trên */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/40 aspect-[16/10] bg-slate-900 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15339.638977114624!2d108.21980315541991!3d16.028599400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219fe6ab36411%3A0x6b8dbb8e19b8417c!2zMjkvMywgSMOyYSBYdcOibiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1716912345678!5m2!1svi!2s"
                  className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ vị trí S-Light Tower"
                ></iframe>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/40 aspect-[16/10] bg-slate-900 group">
                <Image
                  src="/images/Vi-tri-Du-An-Can-Ho-S-Light-Tower-Sun-Property-Sun-Group-Da-Nang.jpg"
                  alt="Bản đồ liên kết vùng hạ tầng Nam Đà Nẵng"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. LÝ DO VÀNG ĐỂ SỞ HỮU S-LIGHT TOWER */}
        {/* ========================================================================= */}
        <section className="order-5 py-20 bg-white container mx-auto px-4 max-w-7xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black font-title-luxury text-amber-700 uppercase tracking-wide">
              LÝ DO VÀNG ĐỂ SỞ HỮU S-LIGHT TOWER
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="w-full lg:col-span-5 flex">
              <div className="w-full overflow-hidden rounded-2xl bg-white border border-slate-200/70 p-2.5 shadow-sm flex items-center justify-center">
                <Image
                  alt="Lý do vàng để sở hữu căn hộ S-Light Tower Đà Nẵng"
                  loading="lazy"
                  src="/images/Thie-ke-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-xl min-h-[320px] lg:min-h-full"
                />
              </div>
            </div>

            <div className="w-full lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 uppercase tracking-wide">
                    VỊ THẾ TẦM VIEW ĐỘC BẢN
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify font-medium">
                    Thừa hưởng trọn vẹn tầm nhìn khoáng đạt 3 mặt hướng sông ôm
                    trọn dải nước lãng mạn vô giá bên lưu vực sông Hàn.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 uppercase tracking-wide">
                    ĐÓN ĐẦU QUY HOẠCH GIAO THÔNG
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify font-medium">
                    Hưởng trọn lợi thế từ các công trình tương lai như trục cầu
                    Bùi Tá Hán kết nối thẳng ra biển và mạng lưới tàu điện LRT
                    hiện đại.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0 shadow-sm">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 uppercase tracking-wide">
                    CHỦ ĐẦU TƯ UY TÍN QUỐC TẾ
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify font-medium">
                    Phát triển bởi Tập đoàn Sun Group – Bảo chứng vàng mang lại
                    niềm tin tuyệt đối về chất lượng xây dựng, tiến độ lẫn giá
                    trị gia sản.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100/80 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md h-full">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0 shadow-sm">
                  <Gem className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-slate-900 uppercase tracking-wide">
                    TIỀM NĂNG CHO THUÊ KHỦNG
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-justify font-medium">
                    Đon làn sóng dịch chuyển không gian sống cao cấp của nhóm
                    chuyên gia nước ngoài, nhân sự tri thức cao định cư tại miền
                    Trung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. THIẾT KẾ MẶT BẰNG CĂN HỘ */}
        {/* ========================================================================= */}
        <section
          id="mat-bang"
          className="order-6 py-20 bg-slate-50 border-y border-slate-200"
        >
          <div className="container mx-auto px-4 max-w-5xl space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-black font-title-luxury text-amber-700 uppercase leading-normal">
                THIẾT KẾ — TỔNG MẶT BẰNG KHỐI TÒA CAO TẦNG
              </h2>
              <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
                Tòa tháp đôi kiêu hãnh cao 22 tầng nổi được tối ưu hóa sơ đồ
                kiến trúc, giúp 100% không gian căn hộ đều có thể đón nắng và
                lộng gió tự nhiên dọc lòng sông.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-md border bg-white p-2">
              <Image
                src="/images/Layout-Tang-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                alt="Mặt bằng chi tiết phân lô S-Light Tower"
                width={1600}
                height={1000}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-6">
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl flex flex-col justify-center lg:col-span-1">
                <h4 className="text-lg font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Thông số mặt bằng tháp
                </h4>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed text-justify">
                  Bao gồm 02 tòa tháp tháp đôi với mật độ bố trí lý tưởng, phân
                  bổ đa dạng diện tích linh hoạt đáp ứng mọi nhu cầu ở thực hay
                  đầu tư lưu trú.
                </p>
              </div>
              <div className="border rounded-2xl overflow-hidden shadow-sm bg-white lg:col-span-2">
                <Table>
                  <TableHeader className="bg-slate-800">
                    <TableRow>
                      <TableHead className="font-bold text-white py-3 pl-4">
                        Dòng sản phẩm căn hộ
                      </TableHead>
                      <TableHead className="font-bold text-white py-3">
                        Diện tích thiết kế dự kiến
                      </TableHead>
                      <TableHead className="font-bold text-white py-3 text-right pr-4">
                        Giá mở bán kế hoạch
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-sm md:text-base font-semibold text-slate-700">
                    <TableRow>
                      <TableCell className="pl-4">
                        Căn hộ thông minh Studio
                      </TableCell>
                      <TableCell>Khoảng 33.3 m²</TableCell>
                      <TableCell className="text-right pr-4 text-emerald-700 font-bold">
                        Liên hệ giỏ hàng sớm
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="pl-4">
                        Căn hộ tiện nghi 1 Phòng Ngủ +
                      </TableCell>
                      <TableCell>Khoảng 49.3 m²</TableCell>
                      <TableCell className="text-right pr-4 text-emerald-700 font-bold">
                        Liên hệ giỏ hàng sớm
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="pl-4">
                        Căn hộ gia đình 2 Phòng Ngủ
                      </TableCell>
                      <TableCell>Khoảng 57.6 - 59.0 m²</TableCell>
                      <TableCell className="text-right pr-4 text-emerald-700 font-bold">
                        Liên hệ giỏ hàng sớm
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="pl-4">
                        Căn hộ góc lớn 3 Phòng Ngủ
                      </TableCell>
                      <TableCell>Khoảng 76.0 m²</TableCell>
                      <TableCell className="text-right pr-4 text-emerald-700 font-bold">
                        Liên hệ giỏ hàng sớm
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HỆ THỐNG TIỆN ÍCH ALL-IN-ONE */}
        {/* ========================================================================= */}
        <section
          id="tien-do"
          className="order-7 py-16 md:py-24 bg-slate-950 text-white"
        >
          <div className="container mx-auto px-4 max-w-5xl space-y-14">
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-black font-title-luxury text-amber-500 uppercase tracking-wide">
                HỆ TIỆN ÍCH ALL-IN-ONE THƯỢNG LƯU TẠI KHỐI ĐẾ & TẦNG 2
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded mx-auto mt-2"></div>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed text-center font-medium pt-2">
                S-Light Tower tích hợp trọn vẹn đặc quyền sống chuẩn Resort nghỉ
                dưỡng với chuỗi tiện ích đa dạng: bể bơi tràn bờ cao cấp, phòng
                Gym hiện đại, Spa thư giãn, khu Family Game Lounge, Kids Club
                nội khu và không gian Sky Garden lộng gió ngắm mây trời bên bờ
                sông Hàn.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-3 border border-slate-800 shadow-2xl">
              <Tabs defaultValue="images" className="w-full">
                <div className="w-full flex justify-center pb-2">
                  <TabsList className="inline-flex items-center bg-slate-950 p-1.5 rounded-2xl h-auto gap-1">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-slate-300 text-xs md:text-sm font-bold py-2.5 px-5 rounded-xl"
                    >
                      Quy hoạch tầng
                    </TabsTrigger>
                    <TabsTrigger
                      value="facilities"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-slate-300 text-xs md:text-sm font-bold py-2.5 px-5 rounded-xl"
                    >
                      Tầm nhìn thực tế
                    </TabsTrigger>
                    <TabsTrigger
                      value="images"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-slate-300 text-xs md:text-sm font-bold py-2.5 px-5 rounded-xl"
                    >
                      Hệ sinh thái
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview" className="p-6 md:p-8 space-y-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 mb-4 aspect-video">
                    <Image
                      src="/images/Layout-Tang-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                      alt="Mặt bằng tổng thể"
                      width={1600}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TabsContent>
                <TabsContent
                  value="facilities"
                  className="p-6 md:p-8 space-y-4"
                >
                  <div className="rounded-2xl overflow-hidden border border-slate-800 mb-4 aspect-video">
                    <Image
                      src="/images/Thie-ke-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                      alt="Phối cảnh thiết kế biểu tượng"
                      width={1600}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TabsContent>
                <TabsContent
                  value="images"
                  className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
                >
                  <div className="space-y-3">
                    <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-2xl border border-slate-800">
                      <Image
                        src="/images/Tong-quan-du-an-can-ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                        alt="Tầm nhìn view sông"
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-slate-100 font-semibold text-center mt-2">
                      Bể bơi vô cực view sông
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-2xl border border-slate-800">
                      <Image
                        src="/images/Tien-Ich-Be-Boi-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                        alt="Tiện ích bể bơi"
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-slate-100 font-semibold text-center mt-2">
                      Bể bơi sang trọng
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-2xl border border-slate-800">
                      <Image
                        src="/images/Tien-Ich-Phong-Gym-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                        alt="Phòng gym cao cấp"
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-slate-100 font-semibold text-center mt-2">
                      Phòng gym hiện đại
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-2xl border border-slate-800">
                      <Image
                        src="/images/Tien-Ich-Spa-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                        alt="Spa thư giãn"
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-slate-100 font-semibold text-center mt-2">
                      Spa thư giãn cao cấp
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. TIN TỨC THỊ TRƯỜNG */}
        {/* ========================================================================= */}
        <section
          id="tin-tuc"
          className="order-8 w-full bg-white py-16 md:py-20 border-b border-slate-200"
        >
          <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-6">
            <div className="space-y-2 border-b border-slate-200 pb-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-700">
                <Newspaper className="h-4 w-4" /> Tin tức thị trường Nam Đà Nẵng
              </p>
              <h2 className="max-w-3xl text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Tin tức & phân tích nhận định S-Light Tower
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setNewsStartIndex((prev) => Math.max(prev - 1, 0))
                }
                disabled={!canGoPrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="grid flex-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featuredNewsCards.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/tin-tuc/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={600}
                      height={360}
                      className="h-32 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="mt-3 text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setNewsStartIndex((prev) =>
                    Math.min(prev + 1, featuredNewsCards.length - 4),
                  )
                }
                disabled={!canGoNext}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* STICKY BOTTOM BUTTON */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${showSticky ? "opacity-100 scale-100" : "opacity-0 scale-95 invisible pointer-events-none"}`}
      >
        <Dialog open={isStickyOpen} onOpenChange={setIsStickyOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2.5 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 text-amber-950 font-black text-xs md:text-sm px-6 py-3.5 rounded-full shadow-2xl border-2 border-white/60 animate-bounce">
              <div className="flex flex-col text-left">
                <span className="font-extrabold whitespace-nowrap leading-none mb-0.5">
                  BẢNG GIÁ + CHÍNH SÁCH
                </span>
                <span className="text-[9px] text-amber-800 font-semibold tracking-normal leading-none">
                  Mới Nhất 06/2026
                </span>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg bg-white p-6 md:p-8 rounded-[2rem] border focus-visible:outline-none">
            <RegisterDialog onSuccess={() => setIsStickyOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <PhoneIcon />
      <ZaloIcon />
      <ScrollUp />
      <Footer />
    </div>
  );
};

export default NewLanding;
