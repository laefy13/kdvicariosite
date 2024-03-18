/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    loader: 'custom',
    loaderFile: './imageloader.js',
    domains: [
      'kdvicariostorage.blob.core.windows.net',
      'art.pixilart.com',
      'upload.wikimedia.org',
    ],
  },
};

module.exports = nextConfig;
