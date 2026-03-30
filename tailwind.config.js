/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dbfcff",
        "primary-container": "#00f0ff",
        "on-primary": "#00363a",
        "on-primary-container": "#006970",
        secondary: "#d0bcff",
        "secondary-container": "#571bc1",
        "on-secondary": "#3c0091",
        background: "#131313",
        "on-background": "#e5e2e1",
        surface: "#131313",
        "on-surface": "#e5e2e1",
        "surface-variant": "#2a2a2a",
        "on-surface-variant": "#b9cacb",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        outline: "#849495",
        "outline-variant": "#3b494b",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
