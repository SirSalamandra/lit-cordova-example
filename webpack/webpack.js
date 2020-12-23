  
const path = require('path');

module.exports = {
  mode: "production",
  entry: [
    // driver: './src/loader/loader.js'
    "./src/loader/loader.js"
  ],
  output: {
    filename: 'lit-cordova-example.js',
    path: path.resolve(__dirname, '../www/js')
  },
  watch: true
};