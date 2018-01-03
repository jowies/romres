module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    "node": true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
}
