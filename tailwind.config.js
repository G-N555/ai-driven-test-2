/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B45309", // The brown color from the Figma design
        secondary: "#1F2937", // Dark text color
        tertiary: "#4B5563", // Lighter text color
        light: "#FFFFFF",
        lightGray: "#F9FAFB",
        cream: "#FFFBEB",
        darkFooter: "#111827",
      },
      boxShadow: {
        product:
          "0px 10px 15px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)",
        hero: "0px 20px 25px 0px rgba(0, 0, 0, 0.1), 0px 8px 10px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
