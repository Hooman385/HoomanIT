/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: "",

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            }
        ]
    }
}

module.exports = nextConfig


