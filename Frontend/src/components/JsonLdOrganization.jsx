export default function JsonLdOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://s-lighttowersungroup.com",
    name: "S-Light Tower",
    url: "https://s-lighttowersungroup.com",
    description:
      "S-Light Tower - Dự án căn hộ cao cấp Sun Group tại Hòa Xuân, Nam Đà Nẵng.",
    email: "srtmientrungmkt@gmail.com",
    telephone: "+84-918-686-579",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Số 55 An Dương Vương",
      addressLocality: "Ngũ Hành Sơn",
      addressRegion: "Đà Nẵng",
      postalCode: "550000",
      addressCountry: "VN",
    },
    sameAs: ["https://www.facebook.com/iricgroup"],
    image: "/logo.png",
    logo: {
      "@type": "ImageObject",
      url: "/logo.png",
      width: 200,
      height: 200,
    },
    priceRange: "Varies",
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
