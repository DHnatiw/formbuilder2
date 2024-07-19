/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {},
    },
    safelist: [
        {
            pattern: /^(bg|text|border)-/,
        }
    ],
    plugins: [],
};

export default tailwindConfig;