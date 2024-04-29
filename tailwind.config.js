/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                content1: ["content1", "sans-serif"],
                content2: ["content2", "sans-serif"],
            },
        },
    },
    plugins: [],
};
