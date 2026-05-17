import type { NextConfig } from 'next';
import path from 'path';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  ...(isGithubPages
    ? {
        output: 'export' as const,
        basePath: '/portilla',
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
