/* eslint-disable */
const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias')

const aliasMap = {
  '@src': './src',
}
console.log(aliasMap);
module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {alias: aliasMap}
    }
  ]
}