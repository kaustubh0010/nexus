import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#2C3333',
          4: '#222831',
          5: '#31363F'
        },
        blue: {
          1: '#0E78F9',
          2: '#d3e9ff',
        },
        sky: {
          1: '#C9DDFF'
        },
        orange: {
          1: '#FF742E'
        },
        purple: {
          1: '#830EF9'
        },
        yellow: {
          1: '#F9A90E'
        },
        cream: {
          1: '#FBF9F1',
          2: '#E5E1DA',
        },
        aqua: {
          1: '#92C7CF',
          2: '#AAD7D9',
          3: '#A5C9CA',
          4: '#E7F6F2',
          5: '#395B64',
          6: '#76ABAE'
        },
        brown: {
          1: '#A28B55'
        },
      },
      backgroundImage:{
        hero: "url('/images/2.png')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config