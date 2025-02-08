module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@context': './src/context',
          '@api': './src/api',
          '@store': './src/store',
          '@hoc': './src/hoc',
        },
      },
    ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
  ],
};
