/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}
