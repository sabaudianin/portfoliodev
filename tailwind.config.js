/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "blue-md": "0 4px 6px -1px rgba(59,130,246,0.3)",
        "cyan-lg": "0 10px 15px -3px rgba(6,182,212,0.5)",
        "cyan-glow": "0 0 12px rgba(6,182,212,0.6)",
      },
    },
  },
  plugins: [],
  safelist: ["shadow-cyan-glow", "shadow-blue-md", "shadow-cyan-lg"],
};

export default config;
