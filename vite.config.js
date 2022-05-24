import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pages from "vite-plugin-pages";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages(),
    viteCompression({
      verbose: false,
      disable: false,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  resolve: {
    // 路径别名
    alias: {
      "@": resolve(__dirname, "./src/components"),
      "~": resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "axios",
      "@htfed/ui",
      "@htfed/utils",
      "vue",
      "vue-router",
      "vxe-table",
    ],
  },
});
