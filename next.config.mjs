/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' 제거 - Vercel에서는 불필요하며 동적 라우트 지원 위해 제거
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
