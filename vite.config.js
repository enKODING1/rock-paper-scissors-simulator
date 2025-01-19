import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  base: "/rock-paper-scissors-simulator/",
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg"],
  plugins: [checker({ typescript: true })],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
  },
});
