module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env').default,
      {
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        exclude: ['transform-typeof-symbol'],
      },
    ],
    [
      require('@babel/preset-react').default,
      {
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    [
      require('@babel/plugin-proposal-class-properties').default,
      { loose: true },
    ],
  ],
});
