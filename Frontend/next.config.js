/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tin-tuc/:slug/",
        destination: "/tin-tuc/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
