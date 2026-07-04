// ROOT/tailwind.config.cjs

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                editorial: {
                    paper: '#F7F7F5',       // Fondo principal mate
                    surface: '#EAEAE7',     // Fondos secundarios (para separar tarjetas sin usar bordes duros)
                    ink: {
                        heading: '#111111',   // Títulos (máximo contraste, sin llegar a #000)
                        body: '#1C1A1A',      // Texto general (legibilidad sin fatiga)
                        muted: '#3A3835',     // Descripciones y subtítulos
                        meta: '#5A5855'       // Etiquetas, metadatos, eyebrows
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'], // Tipografía técnica y estructurada
                serif: ['Lora', 'Georgia', 'serif'],        // Tipografía de impacto y lectura profunda
            }
        },
    },
    plugins: [],
}