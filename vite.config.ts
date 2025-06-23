import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: mode === 'development' ? '/' : '/advanced-web-profile/',
  plugins: [
    react(),
    mode === 'development' && componentTagger(),

    // 自动复制 dist/index.html 为 dist/404.html，支持 GitHub Pages SPA 刷新
    {
      name: "copy-404-for-spa",
      closeBundle: () => {
        const distDir = path.resolve(__dirname, "dist")
        const indexPath = path.resolve(distDir, "index.html")
        const notFoundPath = path.resolve(distDir, "404.html")
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath)
          console.log("📄 404.html copied for SPA routing fallback.")
        }
      },
    },

  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

