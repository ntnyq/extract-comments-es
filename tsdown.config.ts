import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  shims: true,
  target: ['es2022', 'node18'],
})
