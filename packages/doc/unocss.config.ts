import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
} from 'unocss'

const shortcuts = {
  cp: 'cursor-pointer pointer-events-auto',
  cna: 'cursor-not-allowed pointer-events-none',
  fc: 'flex flex-col',
  fr: 'flex-row',
  ic: 'items-center',
  jc: 'justify-center',
  jb: 'justify-between',
}

export default defineConfig({
  shortcuts: [shortcuts],
  safelist: [...Object.keys(shortcuts)],
  presets: [
    presetMini(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  rules: [],
  theme: {
    colors: {
      bk: '#333',
    },
  },
  transformers: [
    transformerDirective(),
    transformerVariantGroup(),
  ],
})
