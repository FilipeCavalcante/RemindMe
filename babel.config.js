module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@shared': './src/shared',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@routes': './src/routes',
          '@models': './src/models',
          '@services': './src/services',
        },
      },
    ],
  ],
};
