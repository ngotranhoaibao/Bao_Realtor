import "../src/index.css";
import LayoutClient from "@/components/LayoutClient";
import JsonLdOrganization from "@/components/JsonLdOrganization";

export const metadata = {
  title: "S-Light Tower Đà Nẵng - Bảng Giá, Mặt Bằng, Chính Sách Mới Nhất 2026",
  description:
    "S-Light Tower Đà Nẵng - Xem bảng giá, mặt bằng, chính sách mới nhất 2026. Dự án căn hộ cao cấp Sun Group tại Hòa Xuân. Sở hữu ngay với ưu đãi đặc biệt.",
  icons: {
    icon: "/images/logo-sun-s-light-tower.avif",
    apple: "/images/logo-sun-s-light-tower.avif",
  },
  openGraph: {
    type: "website",
    url: "https://s-lighttower.id.vn",
    title:
      "S-Light Tower Đà Nẵng - Bảng Giá, Mặt Bằng, Chính Sách Mới Nhất 2026",
    description:
      "Xem bảng giá, mặt bằng, chính sách mới nhất 2026 của S-Light Tower Đà Nẵng. Dự án cao cấp Sun Group.",
    siteName: "S-Light Tower",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "S-Light Tower Đà Nẵng - Bảng Giá, Mặt Bằng, Chính Sách Mới Nhất 2026",
    description:
      "Xem bảng giá, mặt bằng, chính sách mới nhất 2026 của S-Light Tower Đà Nẵng. Dự án cao cấp Sun Group.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <JsonLdOrganization />
        <link rel="canonical" href="https://s-lighttower.id.vn" />
      </head>
      <body style={{ margin: 0, backgroundColor: "#fff" }}>
        {children}
        <LayoutClient />
      </body>
    </html>
  );
}
