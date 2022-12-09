/* eslint-disable */
const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.pathes.json')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {alias: aliasMap}
    }
  ]
}