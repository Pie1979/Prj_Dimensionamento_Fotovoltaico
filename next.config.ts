import type { NextConfig } from 'next';

const repoBase = process.env.GITHUB_PAGES === 'true' ? '/Prj_Dimensionamento_Fotovoltaico' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repoBase,
  assetPrefix: repoBase ? `${repoBase}/` : undefined,
};

export default nextConfig;
