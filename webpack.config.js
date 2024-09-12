import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const devServer = {
  port: 8081,
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];
export const module = {
  rules: [
    {
      test: /\.scss$/,
      use: [
        'style-loader', // Fügt CSS ins DOM ein
        'css-loader', // Verarbeitet CSS-Dateien
        'sass-loader' // Kompiliert SCSS zu CSS
      ],
    },
  ],
};
