/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/study",
        destination: "/",
        permanent: false,
      },
    ];
  },
  images: {
    domains: [""],
  },
};

module.exports = nextConfig;
