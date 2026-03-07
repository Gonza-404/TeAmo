const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  plugins: [
    // 1. Tu nueva portada (El Menú Principal)
    new HtmlWebpackPlugin({
      template: './index.html', // El archivo fuente
      filename: 'index.html',   // El archivo que generará Webpack
    }),

    // 2. La página del primer mes (tu página original que ya renombraste)
    new HtmlWebpackPlugin({
      template: './mes1.html',
      filename: 'mes1.html',
    }),

    // 3. La página del segundo mes (para el contador y las fotos)
    new HtmlWebpackPlugin({
      template: './mes2.html',
      filename: 'mes2.html',
    }),

    // 4. La página sorpresa de su cumpleaños
    new HtmlWebpackPlugin({
      template: './cumple.html',
      filename: 'cumple.html',
    }),
  ],
};
