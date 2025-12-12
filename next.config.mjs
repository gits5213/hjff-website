/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If using custom domain, set basePath to '' or remove it
  // If using github.io subdomain, set basePath to '/hjff-website'
  basePath: process.env.NODE_ENV === 'production' ? '/hjff-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hjff-website' : '',
  trailingSlash: true,
  // Disable static optimization warnings for better chunk handling
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure proper chunk generation and loading
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
