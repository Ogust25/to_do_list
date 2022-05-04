module.exports = {
  content: ["./index.php", "./php/view_all.php", "./php/view_enCours.php", "./php/view_fini.php", "./js/script.js"],
  theme: {
    extend: {
      backgroundSize: {
        'phone': '100% 25%',
        'max': '100% 30%',
      },
      backgroundImage: {
        'small-custom': "url('../assets/images/bg_image_small.jpg')",
        'full-custom': "url('../assets/images/bg_image_full.jpg')",
      },
      backgroundColor: {
        'main': "#FFFAFF",
      }
    },
  },
  plugins: [],
}
