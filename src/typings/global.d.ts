/* Vite */
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_USER_NODE_ENV: "development" | "production" | "test";
  VITE_GLOB_APP_TITLE: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_REPORT: boolean;
  VITE_ROUTER_MODE: "hash" | "history";
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "gzip,brotli" | "none";
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_PWA: boolean;
  VITE_DEVTOOLS: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_API_URL: string;
  VITE_PROXY: [string, string][];
  VITE_CODEINSPECTOR: boolean;
}

/* __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};
interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}