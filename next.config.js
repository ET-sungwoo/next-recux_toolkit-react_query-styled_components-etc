/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['inflearn-nextjs.vercel.app', 'search.pstatic.net'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'inflearn-nextjs.vercel.app',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'search.pstatic.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
    i18n: {
        /** https://nextjs.org/docs/advanced-features/i18n-routing#getting-started */
        locales: ['ko'],
        defaultLocale: 'ko',
    },
};

module.exports = nextConfig;
