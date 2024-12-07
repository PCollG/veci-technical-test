import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@atoms": "/src/components/atoms",
      "@molecules": "/src/components/molecules",
      "@organisms": "/src/components/organisms",
      "@templates": "/src/components/templates",
      "@pages": "/src/pages",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
    },
  },
});
