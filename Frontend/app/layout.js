import "../src/index.css";
import LayoutClient from "@/components/LayoutClient";
import JsonLdOrganization from "@/components/JsonLdOrganization";

export const metadata = {
  title: "S-Light Tower | Dự án Sun Group Đà Nẵng",
  description:
    "S-Light Tower - Dự án căn hộ cao cấp Sun Group tại Hòa Xuân, Nam Đà Nẵng. Sống tiện nghi với tầm view sông và hệ tiện ích quốc tế.",
  icons: {
    icon: "/images/logo-sun-s-light-tower.avif",
    apple: "/images/logo-sun-s-light-tower.avif",
  },
  openGraph: {
    type: "website",
    url: "https://s-lighttowersungroup.com",
    title: "S-Light Tower | Dự án Sun Group Đà Nẵng",
    description:
      "S-Light Tower - Dự án căn hộ cao cấp Sun Group tại Hòa Xuân, Nam Đà Nẵng.",
    siteName: "S-Light Tower",
  },
  twitter: {
    card: "summary_large_image",
    title: "S-Light Tower | Dự án Sun Group Đà Nẵng",
    description:
      "S-Light Tower - Dự án căn hộ cao cấp Sun Group tại Hòa Xuân, Nam Đà Nẵng.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <JsonLdOrganization />
        <link rel="canonical" href="https://s-lighttowersungroup.com" />
      </head>
      <body style={{ margin: 0, backgroundColor: "#fff" }}>
        {children}
        <LayoutClient />
      </body>
    </html>
  );
}
