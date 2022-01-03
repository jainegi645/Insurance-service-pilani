module.exports = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#006266",
        secondayColor: "#335c66",
        ternaryColor: '#585858',
        customborderColor: '#325F6D',
        
      },
      translate: {
        hide: "300px",
      },
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Tinos"],
      },
      backgroundImage: {
        'familyPic' : "url('/images/family1.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
