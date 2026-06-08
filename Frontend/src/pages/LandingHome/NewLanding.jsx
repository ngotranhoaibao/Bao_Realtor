import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import {
  Calendar,
  ShieldCheck,
  Layers,
  MapPin,
  Phone,
  Mail,
  Building2,
  Briefcase,
  TrendingUp,
  KeyRound,
  CalendarDays,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Heart,
  Gem,
  Award,
} from "lucide-react";

const NewLanding = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error("Vui lòng nhập tên và số điện thoại");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
      };

      await submitContact(payload);
      toast.success("Đã gửi thông tin. Chúng tôi sẽ liên hệ sớm.");
      setName("");
      setPhone("");
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.message || err.message || "Gửi thất bại";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white text-slate-950 font-sans antialiased">
      {/* ========================================================================= */}
      {/* 1. HERO SLIDER BANNER — ĐẠI CẢNH ĐÊM KHÔNG GIAN VÔ CỰC */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.2), rgba(0,0,0,0.65)), url('https://thelumia-danang.vn/wp-content/uploads/2025/07/the-lumia-da-nang-background.jpg')`,
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

          <div className="text-center space-y-6 my-auto pointer-events-auto max-w-4xl mx-auto px-2">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-lg border border-amber-400">
              TRỰC TIẾP CHỦ ĐẦU TƯ — GIÁ TỐT NHẤT
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-none drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] bg-gradient-to-b from-white to-slate-200 bg-clip-text text-transparent">
              THE LUMIA ĐÀ NẴNG
            </h1>
            <p className="text-xl md:text-3xl font-medium text-amber-400 tracking-wider max-w-3xl mx-auto drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] uppercase">
              HỆ SINH THÁI DỊCH VỤ & THƯƠNG MẠI ĐẲNG CẤP
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 w-full mb-2 pointer-events-auto">
            <Button
              onClick={() =>
                document
                  .getElementById("dang-ky-tai-lieu")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white/10 hover:bg-white text-white hover:text-slate-950 border-2 border-white font-bold uppercase tracking-[0.2em] text-xs px-10 py-7 rounded-full transition-all duration-300 shadow-2xl backdrop-blur-sm"
            >
              TẢI BẢNG GIÁ GỐC
            </Button>
            <ChevronDown className="h-7 w-7 text-amber-400 animate-bounce mt-3 drop-shadow-md" />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-1.5 bg-black/40 z-20">
          <div className="h-full w-1/4 bg-amber-500 rounded-r shadow-[0_0_10px_#f59e0b]" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1B. CHÍNH SÁCH BÁN HÀNG HOT & FORM ĐĂNG KÝ NHẬN BẢNG GIÁ (image_1df124.png) */}
      {/* ========================================================================= */}
      <section
        id="dang-ky-tai-lieu"
        className="relative w-full overflow-hidden bg-slate-950"
      >
        <div
          className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-20 px-4 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.85)), url('https://thelumia-danang.vn/wp-content/uploads/2025/07/booking-the-lumia-da-nang.jpg')`,
          }}
        >
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 max-w-6xl">
            {/* Cột chữ trái: Show chính sách dự kiến cực HOT */}
            <div className="lg:col-span-6 text-white space-y-6 text-left">
              <div className="inline-block bg-red-600/20 text-red-400 border border-red-500/30 px-4 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                Ưu đãi độc quyền đợt 1
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-amber-400 uppercase tracking-wide leading-tight">
                CHÍNH SÁCH BÁN HÀNG DỰ KIẾN CỰC HOT
              </h2>
              <div className="w-16 h-1 bg-amber-500 rounded"></div>

              <ul className="space-y-4 text-base md:text-lg font-medium text-slate-200">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 shrink-0" />
                  <span>
                    Ngân hàng bảo lãnh, hỗ trợ vay vốn tới{" "}
                    <span className="text-amber-400 font-bold">70%</span> giá
                    trị căn hộ.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 shrink-0" />
                  <span>
                    Chiết khấu đặc quyền cực cao khi thanh toán sớm và theo tiến
                    độ.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 shrink-0" />
                  <span>
                    Nhận thêm ưu đãi đặc biệt hấp dẫn khi giao dịch mua từ 2 căn
                    trở lên.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 shrink-0" />
                  <span>
                    Dự án được quản lý và vận hành bởi đơn vị uy tín hàng đầu
                    quốc tế.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 shrink-0" />
                  <span>
                    Tiềm năng tăng giá lớn đón đầu quy hoạch cảng biển quốc tế
                    Liên Chiểu.
                  </span>
                </li>
              </ul>

              <p className="text-sm md:text-base text-slate-400 italic pt-2">
                * Liên hệ Hotline Phòng Kinh Doanh hoặc Đăng ký biểu mẫu để nhận
                bảng hàng 20 căn suất nội bộ giá ưu đãi riêng từ Chủ đầu tư.
              </p>
            </div>

            {/* Cột phải: Form Đăng ký nhận bảng giá chuẩn UI của bạn */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <Card className="w-full max-w-md bg-slate-950/85 border border-white/10 text-white backdrop-blur-md p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-3xl">
                <CardHeader className="space-y-2 p-0 pb-6 text-center">
                  <CardTitle className="text-2xl md:text-3xl font-black text-amber-500 tracking-wide uppercase">
                    ĐĂNG KÝ NHẬN BẢNG GIÁ
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-xs md:text-sm font-semibold uppercase tracking-wider text-red-500">
                    BẢNG HÀNG 20 CĂN GIÁ ƯU ĐÃI RIÊNG
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label
                        htmlFor="hero-name"
                        className="text-xs font-bold uppercase tracking-wider text-slate-300"
                      >
                        Họ và tên *
                      </Label>
                      <Input
                        id="hero-name"
                        placeholder="Nhập tên của bạn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-white border-none text-slate-900 h-12 rounded-xl focus-visible:ring-2 focus-visible:ring-amber-500 font-medium"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="hero-phone"
                        className="text-xs font-bold uppercase tracking-wider text-slate-300"
                      >
                        Số điện thoại *
                      </Label>
                      <Input
                        id="hero-phone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-white border-none text-slate-900 h-12 rounded-xl focus-visible:ring-2 focus-visible:ring-amber-500 font-medium"
                        required
                      />
                    </div>
                    <Button
                      disabled={loading}
                      type="submit"
                      className={`w-full h-14 ${loading ? "opacity-60 cursor-wait" : "bg-red-600 hover:bg-red-700"} text-white font-black uppercase tracking-widest transition-all rounded-xl shadow-lg border border-red-700 text-sm py-6 mt-2`}
                    >
                      {loading ? "Đang gửi..." : "NHẬN BẢNG GIÁ GỐC"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TỔNG QUAN DỰ ÁN — HÌNH CHỮ TO RÕ, CÂN BẰNG CHIỀU CAO CAO CẤP */}
      {/* ========================================================================= */}
      <section id="tong-quan" className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-amber-700 uppercase tracking-wide">
            TỔNG QUAN DỰ ÁN THE LUMIA ĐÀ NẴNG
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="flex flex-col justify-between py-2">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-justify mb-6">
              <span className="font-bold text-amber-700">
                The Lumia Đà Nẵng
              </span>{" "}
              là phân khu đô thị sinh thái cao cấp tiên phong cho mô hình{" "}
              <span className="font-bold text-slate-900">All-in-one</span> tích
              hợp công nghệ thông minh 4.0 đầu tiên tại bờ bắc Thành phố Đà
              Nẵng. Sở hữu vị thế chiến lược đón đầu kỷ nguyên vươn mình của
              Cảng biển quốc tế Liên Chiểu, dự án mang lại cơ hội đầu tư an cư
              lý tưởng, sinh lời bền vững theo thời gian.
            </p>

            <div className="bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-5 flex-grow flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <Building2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-slate-700 leading-normal">
                  <strong className="text-slate-900 font-bold">
                    Chủ đầu tư uy tín:
                  </strong>{" "}
                  Công ty Cổ phần Đầu tư Sài Gòn – Đà Nẵng (SDN).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-slate-700 leading-normal">
                  <strong className="text-slate-900 font-bold">
                    Đơn vị phát triển:
                  </strong>{" "}
                  Tập đoàn Saigontel Land.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-slate-700 leading-normal">
                  <strong className="text-slate-900 font-bold">
                    Vị trí đắc địa:
                  </strong>{" "}
                  Mặt tiền đường Nguyễn Tất Thành nối dài, Q.Liên Chiểu, TP. Đà
                  Nẵng.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Layers className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-slate-700 leading-normal">
                  <strong className="text-slate-900 font-bold">
                    Quy mô quỹ đất:
                  </strong>{" "}
                  69.87 Hecta — Mật độ xây dựng lý tưởng chỉ khoảng 30%.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold">
                    Cơ cấu loại hình:
                  </strong>{" "}
                  Nhà phố liền kề, Shophouse thương mại, Biệt thự sinh thái hồ
                  và Chung cư cao tầng.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <KeyRound className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-slate-700 leading-normal">
                  <strong className="text-slate-900 font-bold">
                    Pháp lý hoàn chỉnh:
                  </strong>{" "}
                  Đã cấp Giấy chứng nhận đăng ký đầu tư phê duyệt quy hoạch hoàn
                  toàn sạch.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-between">
            <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200 aspect-[16/10]">
              <img
                src="https://thelumia-danang.vn/wp-content/uploads/2025/07/the-lumia-da-nang.jpg"
                alt="Phối cảnh tổng thể dự án"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl border aspect-video shadow-sm">
                <img
                  src="https://thelumia-danang.vn/wp-content/uploads/2025/07/quy-hoach-du-an-the-lumia-da-nang.jpg"
                  alt="Bản đồ quy hoạch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border aspect-video shadow-sm">
                <img
                  src="https://thelumia-danang.vn/wp-content/uploads/2025/07/canh-quan-tien-ich-the-lumia-da-nang.jpg"
                  alt="Cảnh quan công viên"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VỊ TRÍ CHI TIẾT CHIẾN LƯỢC QUẬN LIÊN CHIỂU */}
      {/* ========================================================================= */}
      <section id="vi-tri" className="py-16 md:py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-amber-500 flex items-center gap-2 uppercase">
              <MapPin className="h-7 w-7" /> VỊ TRÍ KIM CƯƠNG LIÊN CHIỂU
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded"></div>
            <div className="text-slate-200 text-justify text-base md:text-lg space-y-4 leading-relaxed">
              <p>
                <strong className="text-white">The Lumia Đà Nẵng</strong> tọa
                lạc đắc địa tại mặt đường Nguyễn Tất Thành nối dài, trục kinh tế
                huyết mạch kết nối giao thương giữa trung tâm thành phố và Cảng
                biển quốc tế Liên Chiểu.
              </p>
              <p>
                Liên Chiểu là quận kinh tế mới sở hữu tiềm lực phát triển vượt
                trội cùng lúc cả 3 mũi nhọn:{" "}
                <span className="text-amber-400 font-semibold">
                  Công nghiệp sạch — Logistics hàng hải — Du lịch cảnh quan sinh
                  thái sinh khí
                </span>
                . Đảm bảo cho biên độ tăng trưởng đất nền thấp tầng x2, x3 trong
                tương lai gần.
              </p>
            </div>
            <div className="bg-slate-900/60 rounded-xl overflow-hidden border border-slate-700 p-2">
              <Table>
                <TableHeader className="bg-slate-900">
                  <TableRow>
                    <TableHead className="text-amber-500 font-bold text-sm md:text-base">
                      Mốc liên kết vùng (Cách biển 5 phút)
                    </TableHead>
                    <TableHead className="text-amber-500 font-bold text-sm md:text-base text-right">
                      Thời gian
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-slate-200 text-sm md:text-base">
                  <TableRow>
                    <TableCell>
                      ĐH Bách Khoa, ĐH Sư Phạm, Chợ Nam Ô, THPT Đàm Quang Trung
                    </TableCell>
                    <TableCell className="text-right text-amber-400 font-bold">
                      5 phút
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Cảng biển quốc tế Liên Chiểu, KDL Nam Ô, Công viên
                      Mikazuki
                    </TableCell>
                    <TableCell className="text-right text-amber-400 font-bold">
                      10 phút
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Bến xe trung tâm thành phố, Cầu vượt Ngã ba Huế
                    </TableCell>
                    <TableCell className="text-right text-amber-400 font-bold">
                      15 fluid
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Sân bay quốc tế Đà Nẵng, Cầu Sông Hàn, Trung tâm hành
                      chính
                    </TableCell>
                    <TableCell className="text-right text-amber-400 font-bold">
                      20 phút
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[16/10]">
              <img
                src="https://thelumia-danang.vn/wp-content/uploads/2025/07/vi-tri-the-lumia-da-nang.jpg"
                alt="Bản đồ liên kết vùng"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[16/10]">
              <img
                src="https://thelumiadanang.com.vn/wp-content/uploads/2025/04/The-Lumia-Da-Nang-Quan-Lien-Chieu-1400x788.jpg"
                alt="Hạ tầng Liên Chiểu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THIẾT KẾ MẶT BẰNG & PHÂN KHU THẤP TẦNG GIAI ĐOẠN 1 */}
      {/* ========================================================================= */}
      <section
        id="mat-bang"
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-amber-700 uppercase">
              THIẾT KẾ — TỔNG MẶT BẰNG DỰ ÁN
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
              Mang phong cách kiến trúc hiện đại, các sản phẩm được thiết kế
              tinh tế theo hướng sang trọng, thanh nhã, tối ưu hóa công năng kết
              hợp hoàn hảo giữa kinh doanh buôn bán thương mại và an cư lập
              nghiệp.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md border bg-white p-2">
            <img
              src="https://thelumia-danang.vn/wp-content/uploads/2025/07/tong-mat-bang-the-lumia-da-nang.jpg"
              alt="Mặt bằng chi tiết phân lô"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Bảng thông số kỹ thuật phân bổ Giai đoạn 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-6">
            <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl flex flex-col justify-center lg:col-span-1">
              <h4 className="text-lg font-bold text-amber-400 uppercase tracking-wider mb-2">
                Giai đoạn 1 thấp tầng
              </h4>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed text-justify">
                Bao gồm{" "}
                <span className="font-bold text-white">970 sản phẩm</span> biệt
                thự, liền kề, shophouse lấy cảm hứng từ những chòm sao rực rỡ
                của dải Ngân Hà, chia thành 4 tiểu khu:{" "}
                <span className="text-amber-400 font-semibold">
                  Asia Town, The Astra, The Orion và The Vega
                </span>{" "}
                ôm trọn mặt hồ cảnh quan rộng 1.6ha.
              </p>
            </div>
            <div className="border rounded-2xl overflow-hidden shadow-sm bg-white lg:col-span-2">
              <Table>
                <TableHeader className="bg-slate-800">
                  <TableRow>
                    <TableHead className="font-bold text-white py-3 pl-4">
                      Dòng sản phẩm thấp tầng
                    </TableHead>
                    <TableHead className="font-bold text-white py-3">
                      Số lượng mở bán đợt 1
                    </TableHead>
                    <TableHead className="font-bold text-white py-3 text-right pr-4">
                      Giá bán kế hoạch
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-sm md:text-base font-semibold text-slate-700">
                  <TableRow>
                    <TableCell className="pl-4">
                      Biệt thự sinh thái mặt hồ
                    </TableCell>
                    <TableCell>133 căn độc bản</TableCell>
                    <TableCell className="text-right pr-4 text-amber-700 font-bold">
                      Chỉ từ 5x triệu/m²
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-4">
                      Nhà phố liền kề tối ưu
                    </TableCell>
                    <TableCell>747 căn đa năng</TableCell>
                    <TableCell className="text-right pr-4 text-amber-700 font-bold">
                      Chỉ từ 5x triệu/m²
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="pl-4">
                      Boutique Shophouse mặt trục chính
                    </TableCell>
                    <TableCell>90 căn sôi động</TableCell>
                    <TableCell className="text-right pr-4 text-amber-700 font-bold">
                      Chỉ từ 5x triệu/m²
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-none">
                    <TableCell className="pl-4 text-amber-900 font-bold">
                      Căn hộ chung cư cao tầng
                    </TableCell>
                    <TableCell>1.290 căn hộ 4 block</TableCell>
                    <TableCell className="text-right pr-4 text-emerald-700 font-bold">
                      Chỉ từ 4x triệu/m²
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. KHỐI BOX NÂNG CẤP: LÍ DO VÀNG ĐỂ SỞ HỮU — SANG TRỌNG VÀ THU HÚT */}
      {/* ========================================================================= */}
      <section className="py-20 container mx-auto px-4 max-w-5xl space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-amber-700 uppercase tracking-wide">
            LÝ DO VÀNG ĐỂ SỞ HỮU THE LUMIA
          </h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">
                LỰA CHỌN HOÀN HẢO
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Biệt thự, shophouse, liền kề diện tích lớn, đầy đủ tiện nghi với
                tầm nhìn khoáng đạt bên mặt hồ, biên độ tăng giá phi mã đã hiện
                hữu rõ nét.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">
                VỊ TRÍ ĐẮC ĐỊA
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Tọa lạc ngay mặt tiền đường chiến lược Nguyễn Tất Thành nối dài,
                cơ sở hạ tầng đồng bộ vượt trội, cách bãi tắm biển chỉ đúng 5
                phút di chuyển.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">
                TÂM ĐIỂM XANH AN LÀNH
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Mật độ xây dựng thấp lý tưởng chỉ 30%, bao bọc xung quanh là
                công viên cây xanh chủ đề ngập tràn năng lượng sinh khí trong
                lành.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
              <Gem className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">
                TIỆN ÍCH CAO CẤP
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Đem lại cho gia chủ đầy đủ chuỗi tiện nghi thượng lưu đặc quyền,
                tận hưởng phong cách sống chuẩn resort nghỉ dưỡng 5 sao ngay tại
                tổ ấm.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">
                TÂM ĐIỂM THỊNH VƯỢNG
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Thừa hưởng trọn vẹn hạ tầng trung tâm Liên Chiểu với hệ thống
                trường học liên cấp, bệnh viện đa khoa quốc tế và đại trung tâm
                thương mại sầm uất.
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:bg-white hover:shadow-md">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">
                PHÁP LÝ & TIẾN ĐỘ
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Hồ sơ pháp lý hoàn thiện sạch sẽ, tiến độ thi công hạ tầng kỹ
                thuật thần tốc vượt tiến độ mang lại sự an tâm tài chính tuyệt
                đối cho khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HỆ THỐNG TIỆN ÍCH ALL-IN-ONE & TABS PHỐI CẢNH — ĐÃ SỬA KHÍT THANH MENU ĐEN */}
      {/* ========================================================================= */}
      <section id="tien-do" className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-14">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-black text-amber-500 uppercase tracking-wide">
              HỆ TIỆN ÍCH ALL-IN-ONE ĐẲNG CẤP ĐẦU TIÊN
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
              Chuẩn mực sống sinh thái quốc tế tích hợp trọn vẹn mô hình
              Home2Hub đa chức năng lý tưởng vừa để ở vừa kinh doanh sinh lời
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-3 border border-slate-800 shadow-2xl">
            <Tabs defaultValue="overview" className="w-full">
              {/* ĐÃ SỬA: Chuyển sang inline-flex để thanh menu đen ôm sát khít nút bấm, không bị dư thừa */}
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
                  <img
                    src="https://thelumia-danang.vn/wp-content/uploads/2025/07/tong-mat-bang-the-lumia-da-nang.jpg"
                    alt="Tổng mặt bằng dự án"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-slate-200 text-base md:text-lg text-justify leading-relaxed">
                  <strong>Giai đoạn 1 dự án The Lumia Đà Nẵng</strong> bao gồm
                  tổng số 970 căn biệt thự, liền kề và nhà phố shophouse. Lấy
                  cảm hứng dựa trên ý tưởng từ những chòm sao của dải Ngân Hà,
                  giai đoạn 1 được chia thành 4 phân khu thấp tầng là Asia Town,
                  The Astra, The Orion và The Vega.
                </p>
              </TabsContent>

              <TabsContent
                value="facilities"
                className="p-6 md:p-8 space-y-4 text-base md:text-lg text-slate-200 focus-visible:outline-none text-justify leading-relaxed"
              >
                <div className="rounded-2xl overflow-hidden border border-slate-800 mb-4 aspect-video shadow-md">
                  <img
                    src="https://thelumia-danang.vn/wp-content/uploads/2025/07/cac-phan-khu-giai-doan-1-the-lumia-da-nang.jpg"
                    alt="Mặt bằng phân khu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>
                  Các phân khu nằm ôm trọn lấy Hồ cảnh quan trung tâm rộng tới
                  1.6ha cùng hệ thống công viên cây xanh, quảng trường trung tâm
                  rực rỡ và hệ sinh thái tiện ích đa dạng tiêu chuẩn quốc tế.
                  Nổi bật tại tâm điểm chính là tiểu khu Orion với các căn biệt
                  thự hạng sang xa xỉ, bao bọc xung quanh là 3 phân khu Asia
                  Town, The Astra và The Vega với các dãy nhà phố shophouse sôi
                  động được đặt tại các trục lộ giao thông chính.
                </p>
              </TabsContent>

              <TabsContent
                value="images"
                className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 focus-visible:outline-none"
              >
                <div className="space-y-2">
                  <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[4/3] shadow-md">
                    <img
                      src="https://thelumia-danang.vn/wp-content/uploads/2025/07/benh-vien-quoc-te-the-lumia-da-nang.jpg"
                      alt="Bệnh viện"
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-medium text-center">
                    Bệnh viện đa khoa quốc tế Lumia
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[4/3] shadow-md">
                    <img
                      src="https://thelumia-danang.vn/wp-content/uploads/2025/07/truong-hoc-quoc-te-the-lumia-da-nang.jpg"
                      alt="Trường học"
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-medium text-center">
                    Trường học quốc tế liên cấp
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[4/3] shadow-md">
                    <img
                      src="https://thelumia-danang.vn/wp-content/uploads/2025/07/trung-tam-thuong-mai-the-lumia-da-nang.jpg"
                      alt="Trung tâm thương mại"
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-medium text-center">
                    Đại trung tâm thương mại sầm uất
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[4/3] shadow-md">
                    <img
                      src="https://thelumia-danang.vn/wp-content/uploads/2025/07/tuyen-pho-thuong-mai-the-lumia-da-nang.jpg"
                      alt="Tuyến phố thương mại"
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-medium text-center">
                    Tuyến phố Shophouse kinh doanh
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BIỂU MẪU ĐĂNG KÝ LIÊN HỆ ĐỘC QUYỀN BAN QUẢN LÝ */}
      {/* ========================================================================= */}
      <section
        id="lien-he"
        className="py-16 md:py-24 bg-slate-50 border-t border-slate-200"
      >
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-amber-700 uppercase tracking-wide">
              TƯ VẤN VÀ CUNG CẤP HỒ SƠ CHI TIẾT
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
              Đăng ký ngay hôm nay để nhận trọn bộ tài liệu thiết kế mặt bằng
              chi tiết từng phân khu và nhận tư vấn sơ đồ vị trí từ chuyên gia.
            </p>
          </div>

          <Card className="p-8 border border-slate-200 shadow-xl bg-white rounded-[2rem] max-w-lg mx-auto">
            <form className="space-y-5 text-left">
              <div className="space-y-2">
                <Label
                  htmlFor="contact-name"
                  className="text-sm font-bold uppercase tracking-wider text-slate-700"
                >
                  Họ và tên *
                </Label>
                <Input
                  id="contact-name"
                  placeholder="Nhập họ và tên *"
                  className="bg-white border-slate-300 text-slate-900 h-12 rounded-xl text-base focus-visible:ring-red-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="contact-phone"
                  className="text-sm font-bold uppercase tracking-wider text-slate-700"
                >
                  Số điện thoại *
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="Nhập số điện thoại *"
                  className="bg-white border-slate-300 text-slate-900 h-12 rounded-xl text-base focus-visible:ring-red-500"
                  required
                />
              </div>
              <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-[0.15em] text-sm md:text-base transition-all rounded-xl shadow-lg border border-red-700 py-6 mt-2">
                BÁO QUỸ CĂN ĐẸP
              </Button>
            </form>
          </Card>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-semibold text-slate-500 pt-6 border-t border-slate-200">
            <a
              href="tel:0969986263"
              className="flex items-center gap-2 hover:text-amber-700 transition-colors"
            >
              <Phone className="h-4 w-4" /> 096 998 6263
            </a>
            <a
              href="mailto:info@thelumia-danang.vn"
              className="flex items-center gap-2 hover:text-amber-700 transition-colors"
            >
              <Mail className="h-4 w-4" /> info@thelumia-danang.vn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewLanding;
