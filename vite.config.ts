import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

function copy404Plugin(): PluginOption {
  return {
    name: "copy-404-for-spa",
    apply: "build",
    enforce: "post",
    writeBundle() {
      const distDir = path.resolve(__dirname, "dist")
      const indexPath = path.resolve(distDir, "index.html")
      const notFoundPath = path.resolve(distDir, "404.html")

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
        console.log("✅ 404.html copied successfully")
      } else {
        console.warn("⚠️ dist/index.html not found — 404.html not generated")
      }
    },
  }
}


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
    copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

