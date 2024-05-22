const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m2t-dev-static.fra1.digitaloceanspaces.com"],
  },
};

module.exports = withContentlayer(nextConfig);
