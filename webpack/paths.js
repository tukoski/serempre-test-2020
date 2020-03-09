const path = require('path')

module.exports = {
  // The base path of your source files, especially of your index.js
  SRC: path.resolve(__dirname, "..", "src"),
  // The path to put the generated bundle(s)
  DIST: path.resolve(__dirname, "..", "dist"),
  //This is your public path.
  ASSETS: '/dist'
}