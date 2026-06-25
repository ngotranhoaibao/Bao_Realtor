"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const overviewItems = [
  "S-Light Tower là tổ hợp căn hộ cao cấp thuộc Khu đô thị Sinh thái Hoà Xuân do Sun Group làm chủ đầu tư.",
  "Dự án gồm 2 tòa tháp cao 22 tầng, 3 tầng hầm với gần 800 căn hộ.",
  "Vị trí ngay đầu cầu Hòa Xuân, mặt tiền sông Cẩm Lệ, trung tâm mới của thành phố Đà Nẵng.",
  "Loại sản phẩm: Studio, 1PN+, 2PN, 3PN, Penthouse, Shophouse khối đế.",
];

const policyItems = [
  "Hỗ trợ lãi suất lên tới 24 tháng.",
  "Tiến độ thanh toán linh hoạt lên tới 48 tháng.",
  "Thanh toán 70% nhận nhà.",
];

const stats = [
  { label: "Khách du lịch", value: "16,5 triệu lượt" },
  { label: "Khách quốc tế", value: "8,7 triệu lượt" },
  { label: "Doanh thu du lịch", value: "70 nghìn tỷ" },
  { label: "Vốn đầu tư hạ tầng", value: "118 nghìn tỷ" },
  { label: "Đường bay quốc tế", value: "35" },
  { label: "Đường bay nội địa", value: "10" },
  { label: "Tăng trưởng GRDP", value: "9% / năm" },
  { label: "Đường ven biển", value: "20 km" },
];

const amenities = [
  {
    title: "Hồ bơi sang trọng",
    image:
      "/images/Tien-Ich-Be-Boi-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg",
  },
  {
    title: "Phòng gym cao cấp",
    image:
      "/images/Tien-Ich-Phong-Gym-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg",
  },
  {
    title: "Khu sinh hoạt cộng đồng",
    image:
      "/images/Tien-Ich-Phong-Sinh-Hoat-Cong-Dong-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg",
  },
  {
    title: "Spa & chăm sóc sức khỏe",
    image:
      "/images/Tien-Ich-Spa-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg",
  },
];

export default function HomeBrand() {
  return (
    <div className="min-h-screen bg-[#fff8f2] text-slate-900">
      <Header />

      <main>
        <section
          id="hero"
          className="relative overflow-hidden bg-slate-950 text-white"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url('/images/Tam-View-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative pb-20 pt-32 sm:pt-36 lg:pt-44">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
                S-Light Tower | Sun Group Đà Nẵng
              </p>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Dự án biểu tượng S-Light Tower
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-xl">
                Tòa tháp đôi soi bóng sông Hàn, nằm tại trung tâm mới Nam Đà
                Nẵng với tầm view 3 mặt giáp sông và hệ tiện ích quốc tế.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#tong-quan"
                  className="inline-flex rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-2xl shadow-amber-400/25 transition hover:bg-amber-300"
                >
                  Nhận full thông tin dự án
                </a>
                <a
                  href="tel:0763553105"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/40"
                >
                  Gọi ngay 0763553105
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tong-quan"
          className="container mx-auto px-4 py-16 lg:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                Tổng quan dự án
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                S-Light Tower — Biểu tượng sống đắt giá giữa lòng Đà Nẵng
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                S-Light Tower là dự án căn hộ cao cấp do Sun Group phát triển,
                nằm tại Hòa Xuân, sở hữu design kiến trúc lấy cảm hứng “Hạc vân
                thiên”, mang tới không gian sống thượng lưu cùng view sông và
                pháo hoa DIFF.
              </p>

              <ul className="mt-8 space-y-3 text-slate-700">
                {overviewItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#vi-tri"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Khám phá vị trí
                </a>
                <a
                  href="#tien-ich"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
                >
                  Xem tiện ích nội khu
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <img
                src="/images/Tong-quan-du-an-can-ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                alt="Tổng quan dự án S-Light Tower"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
                  Video tổng quan
                </span>
                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Khám phá S-Light Tower qua góc nhìn trực quan
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                  Dự án được kiến tạo từ cảm hứng phương Đông, vừa là
                  second-home đắt giá, vừa là tài sản dòng tiền bền vững tại Nam
                  Đà Nẵng.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-2xl shadow-black/20">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/gxterlZ5rd8?feature=oembed"
                    title="Tổng quan Dự án căn hộ S-Light Tower | Sun Group Đà Nẵng"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vi-tri" className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                Vị trí dự án
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-950">
                Vị trí kim cương mặt tiền sông Cẩm Lệ
              </h2>
              <p className="text-base leading-8 text-slate-700">
                S-Light Tower sở hữu địa thế minh đường tụ thủy, dễ dàng kết nối
                đến biển Mỹ Khê, sân bay quốc tế Đà Nẵng, trung tâm thành phố và
                phố cổ Hội An.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li>2,5 km đến biển Mỹ Khê</li>
                <li>5 km đến sân bay Đà Nẵng</li>
                <li>5,5 km đến lõi trung tâm thành phố</li>
                <li>18,6 km đến phố cổ Hội An</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <img
                src="/images/Vi-tri-Du-An-Can-Ho-S-Light-Tower-Sun-Property-Sun-Group-Da-Nang.jpg"
                alt="Vị trí dự án S-Light Tower"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="san-pham" className="bg-[#fff8f2] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
                Dòng sản phẩm
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Sản phẩm S-Light Tower
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700">
                Mỗi căn hộ được thiết kế tối ưu đón nắng gió, bàn giao vật liệu
                cao cấp và sở hữu pháp lý rõ ràng.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
                <h3 className="text-xl font-semibold text-slate-950">
                  Căn hộ cao cấp
                </h3>
                <p className="mt-4 text-slate-700 leading-7">
                  Studio, 1PN+, 2PN, 3PN, Penthouse — không gian tinh tế, phù
                  hợp cho second-home, cho thuê, hoặc an cư lâu dài.
                </p>
                <p className="mt-4 text-slate-700 leading-7">
                  Thiết kế đón sáng tự nhiên, view sông và bầu trời Đà Nẵng mở
                  rộng.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
                <h3 className="text-xl font-semibold text-slate-950">
                  Shophouse khối đế
                </h3>
                <p className="mt-4 text-slate-700 leading-7">
                  Khối đế thương mại đẳng cấp, thiết kế linh hoạt không vách
                  ngăn, phù hợp kinh doanh đa dạng và giữ giá trị đầu tư bền
                  vững.
                </p>
                <p className="mt-4 text-slate-700 leading-7">
                  Mặt kính lớn, khai thác tầm nhìn, hút khách cư dân thượng lưu.
                </p>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <img
                src="/images/Thie-ke-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                alt="Thiết kế S-Light Tower"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="layout" className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
                Layout tầng
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Layout linh hoạt, chuẩn phong thủy
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
                Hai tháp được kết nối thành một khối tổng thể, lấy cảm hứng hình
                ảnh chim Hạc – biểu tượng của sự thanh cao, trang nhã và trường
                thọ.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              <img
                src="/images/Layout-Tang-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                alt="Layout tầng S-Light Tower"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#fff8f2] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
                Vì sao nên chọn
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                S-Light Tower sở hữu lợi thế vượt trội tại Nam Đà Nẵng
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700">
                Dự án kết hợp vị trí chiến lược, cảnh quan sông nước, shophouse
                đế thương mại và hệ tiện ích đẳng cấp.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                "Minh đường tụ thủy 3 mặt giáp sông",
                "View biển, view pháo hoa DIFF và thắng cảnh Ngũ Hành Sơn",
                "Shophouse thương mại đế tôn vinh nhịp sống đẳng cấp",
                "Tiện ích gym, spa, hồ bơi, thư viện, family lounge",
                "Thiết kế phong thủy Hạc vân thiên giàu biểu tượng",
                "Vị trí kết nối hạ tầng du lịch - dịch vụ ngày càng tăng giá",
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5"
                >
                  <p className="text-base leading-7 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thiet-ke"
          className="container mx-auto px-4 py-16 lg:py-24"
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
              Thiết kế
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Nghệ thuật phương Đông trong từng đường nét
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700">
              S-Light Tower được thiết kế theo tinh thần “Hạc vân thiên”, gợi
              hình chim Hạc vươn bay, biểu tượng cho may mắn, thịnh vượng và an
              lạc.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Cảm hứng văn hóa phương Đông",
                image:
                  "/images/Shophouse-Khoi-De-S-Light-Tower-Sun-Group-Da-Nang.jpg",
              },
              {
                title: "Không gian sống hiện đại",
                image:
                  "/images/Tong-quan-du-an-can-ho-S-Light-Tower-Sun-Group-Da-Nang.jpg",
              },
              {
                title: "View sông và biển mở rộng",
                image: "/images/Thie-ke-S-Light-Tower-Sun-Group-Da-Nang.jpg",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-900/5"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    Không gian được tối ưu cho tinh thần sống hài hòa cùng thiên
                    nhiên và phong thủy tốt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="view" className="bg-slate-950 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
                  Tầm nhìn đắt giá
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Mỗi ô cửa là một bức tranh sông nước Đà Nẵng
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                  Mật độ xây dựng thấp xung quanh cùng hệ sông bao bọc cho phép
                  S-Light Tower sở hữu tầm view mở, khoáng đạt và trong lành.
                </p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 shadow-2xl shadow-black/30">
                <img
                  src="/images/Tam-View-Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                  alt="Tầm nhìn S-Light Tower"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="tien-ich"
          className="container mx-auto px-4 py-16 lg:py-24"
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
              Tiện ích
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tiện ích nội khu chuẩn quốc tế
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700">
              Cư dân S-Light Tower tận hưởng hồ bơi, gym, spa, kids club, family
              lounge và khu vực thư viện “workcation”.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="chinh-sach" className="bg-[#fff8f2] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-900/5">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-600">
                  Chính sách bán hàng
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Chính sách ưu đãi S-Light Tower (Dự kiến)
                </h2>
                <ul className="mt-8 space-y-4 text-slate-700">
                  {policyItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#lien-he"
                  className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-amber-400"
                >
                  Nhận chính sách ưu đãi
                </a>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                <img
                  src="/images/Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg"
                  alt="Chính sách S-Light Tower"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
                Tiềm năng đầu tư
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Những con số biết nói về Đà Nẵng
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center"
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
                    {item.label}
                  </p>
                  <p className="mt-4 text-4xl font-bold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lien-he" className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                Tư vấn cơ hội đầu tư
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Nhận bộ tài liệu dự án, bảng giá, mặt bằng và tư vấn miễn phí
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700">
                Gọi điện hoặc để lại thông tin để nhận full chính sách, bảng
                giá, pháp lý và báo giá chi tiết từ đại lý chính thức.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
              <ContactForm />
              <p className="mt-6 text-xs leading-6 text-slate-500">
                * Bằng việc gửi thông tin, Quý khách đồng ý với chính sách bảo
                mật và cam kết được tư vấn nhanh chóng.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
