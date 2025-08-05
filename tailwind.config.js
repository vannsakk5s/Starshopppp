/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-angular/**/*.js'
  ],
  theme: {
    extend: {
    //   extend: {
    //   screens: {
    //     'iphone11': '414px', // Custom breakpoint
    //   }
    // }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

};