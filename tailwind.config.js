/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        pretendard: ["Pretendard"],
      },
      letterSpacing : {
        custom : "-0.02em"
      },
      colors : {
        'point-color' : "#7BB7FE"
      },
    },
  },
  plugins: [],
}

