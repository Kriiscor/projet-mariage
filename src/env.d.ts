/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaGoogleMapsEnv {
  readonly REACT_APP_GOOGLE_MAPS_API_KEY: string;
}
interface ImportMetaGoogleMaps {
  readonly env: ImportMetaGoogleMapsEnv;
}
