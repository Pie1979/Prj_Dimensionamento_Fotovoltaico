import type { NextConfig } from 'next';

/** Export statico solo per GitHub Pages (workflow CI). Su Vercel usa build Next.js standard. */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoBase = '/Prj_Dimensionamento_Fotovoltaico';

const nextConfig: NextConfig = isGithubPages
  ? {
      output: 'export',
      basePath: repoBase,
      assetPrefix: `${repoBase}/`,
    }
  : {};

export default nextConfig;
