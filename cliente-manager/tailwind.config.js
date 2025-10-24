/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg1: "#FFFFFF",
                    bg2: "#EEE0DC",
                    bg3: "#F6DBD2",
                    rose: "#F6DBD2",
                    text: "#8D6A5E",
                },
            },
            boxShadow: {
                soft: "0 12px 30px rgba(141,106,94,0.10)",
            },
        },
    },
    plugins: [],
};