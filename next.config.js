const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {},
};

module.exports = withContentlayer(nextConfig);
