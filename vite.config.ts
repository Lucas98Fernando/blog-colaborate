import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPLugin from "vite-plugin-eslint";
import { resolve } from "path";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
    eslintPLugin(),
  ],
});
