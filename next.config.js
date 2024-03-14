const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
};

module.exports = withContentlayer(nextConfig);
