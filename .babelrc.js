module.exports = {
  presets: [['@babel/preset-env', { targets: { node: '6.13' } }]],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
      plugins: [
        ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
        'babel-plugin-empower-assert',
        'babel-plugin-espower',
      ],
    },
  },
}