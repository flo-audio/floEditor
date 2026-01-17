import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { viteSingleFile } from "vite-plugin-singlefile";
import fs from "fs";

import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// SVG inliner plugin
function inlineSvgFaviconPlugin(options: { svg: string }) {
  return {
    name: "inline-svg-favicon",
    enforce: "post",
    transformIndexHtml(html: string) {
      if (!fs.existsSync(options.svg)) return html;
      let svgContent = fs.readFileSync(options.svg, "utf8");
      // Remove XML header if present, minify spaces
      svgContent = svgContent
        .replace(/<\?xml[^>]*>\s*/g, "")
        .replace(/\s+/g, " ");
      // Base64 encode the SVG
      const base64 = Buffer.from(svgContent).toString("base64");
      const faviconTag = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,${base64}"/>\n`;
      // Insert favicon into <head>
      return html.replace(/<head>(.*?)/, `<head>$1\n  ${faviconTag}`);
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");
  const isSingleFile = env.SINGLE_FILE === "true";

  return {
    base: "./",
    plugins: [
      react(),
      wasm(),
      topLevelAwait(),
      !isSingleFile &&
        VitePWA({
          registerType: "autoUpdate",
          includeAssets: ["robots.txt"],
          manifest: {
            name: "floEditor",
            short_name: "floEditor",
            start_url: "./",
            display: "standalone",
            theme_color: "#fb3374",
            background_color: "#fcf9f3",
          },
          pwaAssets: {
            config: true,
          },
          workbox: {
            // Ensure index.html is cached even when inlined
            globPatterns: ["**/*.{js,css,html,png,ico,json}"],
            runtimeCaching: [
              {
                urlPattern: /.*\.(js|css|html)$/,
                handler: "NetworkFirst",
                options: { cacheName: "app-shell" },
              },
              {
                urlPattern: /.*\.(png|ico|json)$/,
                handler: "CacheFirst",
                options: { cacheName: "assets" },
              },
            ],
          },
        }),
      // Conditionally add the single file plugin
      isSingleFile && viteSingleFile(),
      // Only inline favicon SVG when isSingleFile
      isSingleFile && inlineSvgFaviconPlugin({ svg: "public/logo.svg" }),
    ].filter(Boolean), // Removes 'false' values if not in single-file mode

    optimizeDeps: {
      exclude: ["@flo-audio/libflo-audio", "@flo-audio/reflo"],
    },

    build: {
      sourcemap: !isSingleFile,
      outDir: "./dist",
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000,
    },
  };
});
