import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const injectProxy = env.VITE_SOME_KEY
    ? {
        [env.VITE_SOME_KEY]: {
          target: env.VITE_SOME_KEY,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            const regex = new RegExp(`^${env.VITE_SOME_KEY}`);
            return path.replace(regex, "");
          },
        },
      }
    : {};

  return {
    plugins: [react()],
    server: {
      proxy: injectProxy,
    },
  };
});
