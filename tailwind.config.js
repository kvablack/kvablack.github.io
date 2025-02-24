/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'stix-two-math': ['"STIX Two Math"', 'Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}

