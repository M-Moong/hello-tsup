import { defineConfig } from 'tsup'

// ./index.js --format esm,cjs,iife 
export default defineConfig({
	globalName: '_',
	entry: ['./index.ts'],
	format: ['esm', 'cjs', 'iife'],
	dts: true,
})