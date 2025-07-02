/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY: "pk_test_51RfokjC4ITSJdbgNjlUQmwo5JF5BpcGWkwr370zzg3LL70iyQt29Es5y1REF93G0c1JJZp33undtnjMees6UoBlH00NHwnP1lj",
        NEXT_PUBLIC_DOMAIN: "http://localhost:3000",
    },
    images: {
    remotePatterns: [
      {
        hostname: "imgcld.yatra.com",
      },
      {
        hostname: "content.r9cdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
