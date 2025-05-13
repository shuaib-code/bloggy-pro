import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bloggy-pro/",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
    },
  },
});
