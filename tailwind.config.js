/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: "#39603d",
        storm: "#daded4",
        charcoal: "#3c403d",
        jade: "#a3bcb6",
        greenish: "#b6b782",
      },
    },
  },
  plugins: [],
};
