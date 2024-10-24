import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orato-orange': '#ee7901',
        'orato-green': '#77b829',
        'orato-blue': '#1d99d6',
        'orato-purple': '#5c5ba5',
        'orato-dark': '#141414',
        'orato-light': '#f0f0f0',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-tick': 'spin 30s steps(30) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
