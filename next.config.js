const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m2td.fra1.digitaloceanspaces.com"],
  },
};

module.exports = withContentlayer(nextConfig);
