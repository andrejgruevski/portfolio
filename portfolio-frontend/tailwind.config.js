/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 4s linear infinite',
            },
            colors: {
                primary: '#1E3A8A',
                secondary: '#3B82F6',
                background: '#F9FAFB',
                surface: '#FFFFFF',
                textPrimary: '#111827',
                textSecondary: '#6B7280',
                accent: '#E0F2FE',
            },
        },
    },
    plugins: [],
};
