/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({theme}) => ({
        blog: {
          css: {
            '--tw-prose-bullets': theme('colors.gray[900]'),
          }
        }
      }),
      colors: {
        "blue-gray-700": "#334155",
        "blue-gray-900": "#0F172A",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
