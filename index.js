module.exports = {
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
    'no-unused-vars': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'key-spacing': ['error', { 'beforeColon': false }],
    'no-undef': 'error',
    'space-before-function-paren': ['error', 'never']
  },
}
