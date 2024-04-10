import { config } from "dotenv";
import { defineConfig } from "vitest/config";

config();

export default defineConfig({
  test: {
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    hookTimeout: 360000, // Something look for debugging/breakpoint purpose
  },
});
