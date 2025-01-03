import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "^/api": {
        // target: "https://mcmapp.online",
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
