/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "zhh1oxrpbvn8lg46.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
