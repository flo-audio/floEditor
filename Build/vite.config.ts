import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");
  const isSingleFile = env.SINGLE_FILE === "true";

  return {
    base: "./",
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["robots.txt"],
        manifest: {
          name: "ID3Editor",
          short_name: "ID3Editor",
          start_url: "./",
          display: "standalone",
          theme_color: "#00bfff",
          background_color: "#00bfff",
        },
        pwaAssets: {
          image: "public/source-image.png",
          preset: "minimal-2023",
          includeHtmlHeadLinks: true,
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
    ].filter(Boolean), // Removes 'false' values if not in single-file mode
    build: {
      sourcemap: true,
      outDir: "./dist",
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000,
    },
  };
});
