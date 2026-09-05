import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {}
const base = env.VITE_BASE ?? (env.GITHUB_ACTIONS ? '/example/' : '/')

export default defineConfig({ base, plugins: [react()] })
