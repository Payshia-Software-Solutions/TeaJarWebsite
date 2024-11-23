import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
        extra_cursive: ['"Great Vibes"', "cursive"],
        italiana: ['"Italiana"', "serif"], // Italiana font added here Julius Sans One
        julius: ["Julius Sans One"],
      },
      colors: {
        babout: "#2A2F28", // Custom color named 'about'
        theme: "#353D32", // Custom color named 'about'
        navC: "#1A1E1C",
        beige: '#f5f5dc',
        brown: '#6b4f4f',
        'green-800': '#355e3b',
      },
    },
  },
  plugins: [],
};

export default config;
