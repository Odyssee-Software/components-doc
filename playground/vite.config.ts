import { defineConfig } from "vite";
import path from "path";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    }),
  ],
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
