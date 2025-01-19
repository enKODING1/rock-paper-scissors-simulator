import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  base: "./",
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg"],
  plugins: [checker({ typescript: true })],
  build: {
    sourcemap: false,
  },
});
