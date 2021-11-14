module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "#006266",
      },
      translate: {
        hide: "300px",
      },
      fontFamily: {
        'serif': ['ui-serif', 'Georgia', 'Tinos'],

       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
