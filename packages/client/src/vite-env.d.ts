/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_DESCRIPTION: string
  readonly VITE_TOKEN: string
  readonly VITE_BASE_URL: string
  readonly VITE_LOGIN: string
  readonly VITE_GOOGLE_MAPS_API_KEY: string
  readonly VITE_OPEN_CAGE_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
