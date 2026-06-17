import "../src/index.css";
import LayoutClient from "@/components/LayoutClient";
import JsonLdOrganization from "@/components/JsonLdOrganization";

export const metadata = {
  title: "The Lumia Đà Nẵng | Bảng giá, chính sách & shophouse Liên Chiểu 2026",
  description:
    "The Lumia Đà Nẵng tại Liên Chiểu: cập nhật bảng giá, chính sách bán hàng, mặt bằng, vị trí, tiện ích và phân tích đầu tư shophouse 4 tầng.",
  openGraph: {
    type: "website",
    url: "https://thelumia.asia",
    title: "The Lumia Đà Nẵng | Shophouse 4 Tầng Vừa Ở Vừa Kinh Doanh",
    description:
      "Dự án The Lumia Đà Nẵng tại Liên Chiểu - Shophouse 4 tầng với vị trí vàng, kinh doanh tốt, tiện ích hoàn hảo",
    siteName: "The Lumia Đà Nẵng",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lumia Đà Nẵng | Shophouse 4 Tầng",
    description:
      "Dự án The Lumia Đà Nẵng tại Liên Chiểu - Shophouse 4 tầng vừa ở vừa kinh doanh",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <JsonLdOrganization />
        <link rel="canonical" href="https://thelumia.asia" />
      </head>
      <body style={{ margin: 0, backgroundColor: "#fff" }}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
