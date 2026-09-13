import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 blocks dev assets for origins other than "localhost". Allow the
  // GitHub Codespaces forwarded URL and the loopback IP, otherwise the page
  // renders server-side but never hydrates (no owl, dead sliders).
  allowedDevOrigins: [
    "127.0.0.1",
    "*.app.github.dev",
    ...(process.env.CODESPACE_NAME
      ? [`${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN ?? "app.github.dev"}`]
      : []),
  ],
};

export default nextConfig;
