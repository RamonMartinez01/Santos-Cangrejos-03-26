// ROOT/tailwind.config.cjs

/** @type {import('tailwindcss').config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: "#9191E6",
                    medium: "#555990",
                    dark: "603C75",
                    bg: "#0F111A",
                }
            },
        },
    },
    plugins: [],
}