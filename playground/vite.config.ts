import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@odyssee/components": path.resolve(
        __dirname,
        "../../odyssee-components/src/index.ts",
      ),
      "@odyssee/components/styles": path.resolve(
        __dirname,
        "../../odyssee-components/src/styles.css",
      ),
      "pulse-framework": path.resolve(
        __dirname,
        "../../odyssee-components/node_modules/pulse-framework",
      ),
    },
  },
  esbuild: {
    jsx: "transform",
    jsxFactory: "Pulse.jsx",
    jsxFragment: "Pulse.render.fragment",
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ["pulse-framework"],
  },
});
