import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [
      'truncate',
      {
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
        'overflow': 'hidden',
      },
    ],
  ],
})
