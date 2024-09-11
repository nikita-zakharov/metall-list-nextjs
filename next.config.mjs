/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    env: {
        SITE_URL: process.env.SITE_URL,
    }
};

export default nextConfig;
