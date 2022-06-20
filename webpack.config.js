const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/src'),
    },

    compress: true,
    port: 8080,
  },
  mode: 'development',  
};