

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Specify the protocol
        hostname: 'cdn.sanity.io', // Remote image hostname
      },
    ],
  },
};

export default nextConfig;
