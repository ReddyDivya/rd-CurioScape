module.exports = {
  plugins: [
    //loads the Tailwind CSS plugin and points it to your tailwind.config.js file
    require('tailwindcss')('./path/to/your/tailwind.config.js'),
    
    //The second plugin require('autoprefixer') is used to automatically add vendor prefixes to CSS properties for better browser compatibility.
    require('autoprefixer'),
  ]
}