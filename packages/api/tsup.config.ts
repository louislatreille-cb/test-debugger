import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  sourcemap: true,
  minify: true,
  dts: true,
  clean: true,
  entry: {
    listen: "./src/listen.ts",
  },
});
