const path = require('path')

const appPath = path.resolve(__dirname, 'android') + path.sep

module.exports = {
  resolver: {
    blacklistRE: new RegExp('^' + appPath.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')),
  },
}
