/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                checkmarks: {
                    "primary": "#4760EE",
                    "secondary": "#EA9E39",
                    "accent": "#FFF15C",
                    "neutral": "#EDEAE6",
                    "base-100": "#231E20",
                    "info": "#73B6DD",
                    "success": "#21E46F",
                    "warning": "#F1B45F",
                    "error": "#FB4428",
                },
            },
            /*      "light",
                  "dark",
                  "cupcake",
                  "bumblebee",
                  "emerald",
                  "corporate",
                  "synthwave",
                  "retro", "cyberpunk",
                  "valentine",
                  "halloween",
                  "garden",
                  "forest",
                  "aqua",
                  "lofi",
                  "pastel",
                  "fantasy",
                  "wireframe",
                  "black",
                  "luxury",
                  "dracula",
                  "cmyk",
                  "autumn",
                  "business",
                  "acid",
                  "lemonade",
                  "night",
                  "coffee",
                  "winter"*/
        ],
    },
};