module.exports = {
  presets: ['module:@react-native/babel-preset', ['nativewind/babel', { mode: 'compile' }]],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
