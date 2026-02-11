/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Ghost White - main light background (using 900 for bg-secondary-900 class)
                secondary: {
                    DEFAULT: '#f7f5fb',
                    50: '#2a1c47',
                    100: '#55388d',
                    200: '#8567c2',
                    300: '#beadde',
                    400: '#f7f5fb', // 500 equivalent
                    500: '#f7f5fb',
                    600: '#f8f6fc',
                    700: '#faf8fc',
                    800: '#fcfbfd',
                    900: '#f7f5fb', // MAIN BACKGROUND
                },
                // Steel Azure - primary corporate blue
                primary: {
                    DEFAULT: '#084887',
                    50: '#badafb',
                    100: '#74b6f7',
                    200: '#2f91f3',
                    300: '#0c6ccc',
                    400: '#084887',
                    500: '#084887',
                    600: '#06396c',
                    700: '#052b51',
                    800: '#031d36',
                    900: '#020e1b',
                },
                // Tiger Orange - vibrant accent
                accent: {
                    DEFAULT: '#f58a07',
                    50: '#fde7cd',
                    100: '#fcd09a',
                    200: '#fab868',
                    300: '#f9a135',
                    400: '#f58a07',
                    500: '#f58a07',
                    600: '#c26d06',
                    700: '#915204',
                    800: '#613703',
                    900: '#301b01',
                },
                // Sandy Brown - secondary accent
                copper: {
                    DEFAULT: '#f9ab55',
                    50: '#feeedd',
                    100: '#fddcba',
                    200: '#fbcb98',
                    300: '#faba75',
                    400: '#f9ab55',
                    500: '#f9ab55',
                    600: '#f68813',
                    700: '#c06707',
                    800: '#804405',
                    900: '#402202',
                },
                // Steel Azure - dark text on light background
                cream: {
                    DEFAULT: '#084887',
                    50: '#badafb',
                    100: '#74b6f7',
                    200: '#2f91f3',
                    300: '#0c6ccc',
                    400: '#084887',
                    500: '#084887',
                    600: '#06396c',
                    700: '#052b51',
                    800: '#031d36',
                    900: '#020e1b',
                },
                // Lavender Grey - additional muted tone
                lavender: {
                    DEFAULT: '#909cc2',
                    50: '#e9ebf3',
                    100: '#d2d7e6',
                    200: '#bcc3da',
                    300: '#a6afce',
                    400: '#909cc2',
                    500: '#909cc2',
                    600: '#6474aa',
                    700: '#485582',
                    800: '#303957',
                    900: '#181c2b',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
