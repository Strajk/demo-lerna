module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  },
  overrides: [
    {
      files: '*.test.js',
      env: {
        jest: true
      },
      rules: {
        'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
}
