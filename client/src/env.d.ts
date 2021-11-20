/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string
  readonly MODE: 'development' | 'production'
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
