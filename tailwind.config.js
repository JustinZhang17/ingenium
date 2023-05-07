/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#50C878',
                    dark: '#0F2A23',
                },
                secondary: {
                    light: '#AFE1AF',
                    dark: '#355E3B',
                },
                text: {
                    light: '#ECFFDC',
                    dark: '#023020',
                },
                background: {
                    light: '#f9fafb',
                    dark: '#151C1A',
                },
                default: {
                    light: '#ffffff',
                    dark: '#000000',
                },
            },
        },
    },
    plugins: [],
};
