import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Get the repository name from GitHub Pages URL or use empty string for custom domain
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
  : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Base path for GitHub Pages
  base: mode === "production" ? base : "/",
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      // Make sure to include the 404.html file in the build
      input: {
        main: path.resolve(__dirname, "index.html"),
        "404": path.resolve(__dirname, "public/404.html"),
      },
    },
  },
}));
