/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // ✅ Include all your components
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // ✅ Ensure 'app' directory is covered
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
