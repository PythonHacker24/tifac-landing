// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          oxanium: ['var(--font-oxanium)'],
        },
      },
    },
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  };
  