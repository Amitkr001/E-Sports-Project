/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all common component extensions
    "./src/**/*.{vue,svelte}",  // Optionally include framework-specific extensions
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}", // Explicit path to Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Use require for external plugins
  ],
};
