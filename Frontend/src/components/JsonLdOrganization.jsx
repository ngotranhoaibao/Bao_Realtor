export default function JsonLdOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thelumia.asia",
    name: "The Lumia Đà Nẵng",
    url: "https://thelumia.asia",
    description:
      "The Lumia Đà Nẵng tại Liên Chiểu - Dự án shophouse 4 tầng kết hợp ở và kinh doanh",
    email: "ngotranhoaibao@gmail.com",
    telephone: "+84-763-553-105",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Liên Chiểu",
      addressLocality: "Đà Nẵng",
      addressRegion: "Đà Nẵng",
      postalCode: "50000",
      addressCountry: "VN",
    },
    sameAs: [
      "https://www.facebook.com/thelumia.danang",
      "https://www.youtube.com/@thelumiadanang",
    ],
    image: "https://thelumia.asia/logo.png",
    logo: {
      "@type": "ImageObject",
      url: "https://thelumia.asia/logo.png",
      width: 200,
      height: 200,
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Đà Nẵng",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
