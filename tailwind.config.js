module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // Ensure the correct path to the image file
        'home-background': "url('/src/path_to_your_image/your_image.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
