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
      'max': {
        max: '1024px'
      }
    },
    extend: {
      colors: {
        background: "#8ECEFF",
        header: "#9cdbff",
        headerText: "#144680",
        scrollHeader: "#5c97db",
        primary: "#1D2F60",
        light: "#c1d0f7",
        accent: {
          DEFAULT: "#1d64b5",
          hover: "#2b4399",
          hoverHead: "#ccedff"
        }
      },
      backgroundImage: {
        heroTop: "url('/images/heroTop/bg.svg')",
        heroBot: "url('/images/heroBot/bg-solid.svg')",
        contact: "url('/images/contact/card.svg')"
      },
      zIndex: {
        mid: "15",
        top: "100"
      }
    },
  },
  plugins: [],
}
