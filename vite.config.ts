import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@image": path.resolve(__dirname, "/src/assets/images"), // Path to the images folder
      // "@icon": path.resolve(__dirname, "/src/assets/icons"),
    },
  },
  build: {
    assetsInlineLimit: 8192, // Adjust the limit (in bytes) for inlining assets (e.g., images) as base64 data URLs
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Set the output folder and file name for images
      },
    },
  },
  server: {
    cors: false,
    proxy: {
      '/film-types': {
        target: "http://192.168.0.103:8080",
        changeOrigin: true
      }
    }
  }
});
