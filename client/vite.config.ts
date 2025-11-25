import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
  },
});
