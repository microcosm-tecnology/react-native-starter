const { defaults: tsjPreset } = require('ts-jest/presets');

const transformIgnoreNodeModules = [
  'react-native'
]

module.exports = {
  ...tsjPreset,
  preset: "react-native",
  transform: {
    ...tsjPreset.transform,
    "^.+\\.(jsx?)$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: [
    `node_modules/(?!${transformIgnoreNodeModules.join('|')})/`
  ],
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsConfig: "./tsconfig.json"
    }
  },
  cacheDirectory: '.jest/cache',
}
