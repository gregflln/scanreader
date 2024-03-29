import daisyui from 'daisyui/src/index.js';
export default {
    purge: ["./index.html",'./src/**/*.{svelte,js,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      daisyui,
    ]
  }