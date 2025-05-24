import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '**/*.md',
    '**/*.js',
    '**/*.wasm',
  ],
}, {
  rules: {
    'no-console': 0,
    'no-async-promise-executor': 0
  },
})
