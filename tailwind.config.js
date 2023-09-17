/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            light: "#EBEBEB",
            dark: "#1A1A1A",
            red: "#FF6A69"
        },
        fontFamily: {
            sans: ["Poppins"],
        },
        extend: {},
    },
    plugins: [],
};
