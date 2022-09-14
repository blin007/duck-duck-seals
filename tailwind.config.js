/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: "Playfair Display",
      body: "Merriweather"
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        background: "#8ECEFF",
        header: "#9cdbff",
        headerText: "#144680",
        scrollHeader: "#5c97db",
        accent: {
          DEFAULT: "#1d64b5",
          hover: "#2b4399",
          hoverHead: "#ccedff"
        }
      },
      backgroundImage: {
        heroTop: "url('/images/heroTop/bg.svg')",

      }
    },
  },
  plugins: [],
}
