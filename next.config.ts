import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // boshqa configlaring bo‘lsa shu yerda qoldir
};

export default withNextIntl(nextConfig);
