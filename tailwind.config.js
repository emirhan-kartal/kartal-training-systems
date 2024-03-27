/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "red-special": "#c8243b",
                "half-red": "#f2cdd3",
                "gray-special":"#f0f0f0"
            },
        },
    },

    plugins: [],
};
