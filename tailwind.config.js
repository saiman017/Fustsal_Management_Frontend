/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Custom small screens breakpoint
        md: "768px",
        mds: "834px", // Custom medium screens breakpoint
        lg: "1024px", // Custom large screens breakpoint
        xl: "1280px", // Custom extra-large screens breakpoint
        "2xl": "1536px", // Custom 2x extra-large screens breakpoint
        // Add more custom breakpoints as needed
      },
    },
  },

  plugins: [],
};
