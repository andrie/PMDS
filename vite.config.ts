import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: "public/animations",
    //       dest: "public",
    //     },
    //   ],
    // }),
  ],
  build: {
    // emptyOutDir: true,
    rollupOptions: {
      input: 'motion-canvas-ts.html',
      output: {
        // dir: "../public/animations",
        entryFileNames: "[name].js",
        // chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      },
      plugins: [
        copy({
          targets: [
            { 
              src: 'public/animations/', 
              dest: 'dist/animations/' 
            },
            { 
              src: 'animations/public/_fonts/', 
              dest: 'dist/public/_fonts/' 
            },
          ],
          hook: 'writeBundle' // run the plugin after the bundle is written
        })
      ]
    },
  },
});
