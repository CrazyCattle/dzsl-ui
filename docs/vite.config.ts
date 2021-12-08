import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: {
      "@": path.join(__dirname, ""),
    },
  },
});
