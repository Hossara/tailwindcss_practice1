/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["Yekan", "sans-serif"]
      },
      colors: {
        "test": "#32a852",
        "test2": {
          100: "#32a852",
          190: "#32a8529e"
        }
      }
    },
  },
  plugins: [],
}
