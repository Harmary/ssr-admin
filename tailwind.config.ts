import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{ts,tsx}',
        './shared/**/*.{js,ts,jsx,tsx}',     // shared модули (если есть)
        './widgets/**/*.{js,ts,jsx,tsx}',    // по FSD
        './features/**/*.{js,ts,jsx,tsx}',   // по FSD
        './entities/**/*.{js,ts,jsx,tsx}',   // по FSD
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
