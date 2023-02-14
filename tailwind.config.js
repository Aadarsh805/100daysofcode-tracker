/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ourBlue: "#57A4FF",
        ourBlack: "#140A29",
      },
      backgroundImage: {
        hero: "url('../public/assets/bg3.png')",
        hero2: "url('../public/assets/bg4.png')",
      },
    },
  },
  plugins: [],
};
