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
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      
      // Fix chunk loading issues in static export with basePath
      if (!dev && config.output) {
        const basePath = process.env.NODE_ENV === 'production' ? '/hjff-website' : '';
        config.output.publicPath = `${basePath}/`;
        // Ensure chunk filenames are consistent
        if (config.output.chunkFilename) {
          config.output.chunkFilename = config.output.chunkFilename.replace(
            '[name]',
            '[id]'
          );
        }
      }
    }
    return config;
  },
};

export default nextConfig;
