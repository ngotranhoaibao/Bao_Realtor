import "../src/index.css";
import LayoutClient from "@/components/LayoutClient";
import JsonLdOrganization from "@/components/JsonLdOrganization";

export const metadata = {
  metadataBase: new URL("https://s-lighttower.id.vn"),
  title: "S-Light Tower Đà Nẵng - Bảng Giá, Mặt Bằng, Chính Sách Mới Nhất 2026",
  description:
  "Cập nhật bảng giá S-Light Tower Đà Nẵng mới nhất 2026. Thông tin dự án Sun Group gồm mặt bằng, vị trí, tiện ích, tiến độ, chính sách bán hàng và ưu đãi mới nhất."  icons: {
    icon: "/images/logo-sun-s-light-tower.avif",
    apple: "/images/logo-sun-s-light-tower.avif",
  },
  openGraph: {
    type: "website",
    url: "https://s-lighttower.id.vn",
    title:
      "S-Light Tower Đà Nẵng - Bảng Giá, Mặt Bằng, Chính Sách Mới Nhất 2026",
    description:
      "Cập nhật bảng giá S-Light Tower Đà Nẵng mới nhất 2026. Thông tin dự án Sun Group gồm mặt bằng, vị trí, tiện ích, tiến độ, chính sách bán hàng và ưu đãi mới nhất.",
    siteName: "S-Light Tower",
    image: {
      url: "https://s-lighttower.id.vn/images/Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg",
      width: 1200,
      height: 630,
      alt: "S-Light Tower Đà Nẵng - Dự Án Căn Hộ Sun Group",
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "S-Light Tower Đà Nẵng - Bảng Giá, Mặt Bằng, Chính Sách Mới Nhất 2026",
    description:
      "Xem bảng giá, mặt bằng, chính sách mới nhất 2026 của S-Light Tower Đà Nẵng. Dự án cao cấp Sun Group.",
    image:
      "https://s-lighttower.id.vn/images/Du-An-Can-Ho-S-Light-Tower-Sun-Group-Da-Nang.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "S-Light Tower",
    "S-Light Tower Đà Nẵng",
    "Dự án S-Light Tower",
    "Bảng giá S-Light Tower",
    "Mặt bằng S-Light Tower",
    "Sun Group Đà Nẵng",
    "Sun Neo City",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <JsonLdOrganization />
      </head>
      <body style={{ margin: 0, backgroundColor: "#fff" }}>
        {children}
        <LayoutClient />
      </body>
    </html>
  );
}
