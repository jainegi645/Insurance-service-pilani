module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(1,48,62)",
      },
      translate: {
        hide: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
