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
};

export default nextConfig;
