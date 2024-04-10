import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  dts: true,
  sourcemap: true,
  entry: {
    index: "src/index.ts",
    persistence: "src/persistence/index.ts",
  },
});
