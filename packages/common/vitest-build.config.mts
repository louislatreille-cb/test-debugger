import { config } from "dotenv";
import { defineConfig } from "vitest/config";
import { vitestConfig } from "../../vitest-build.config.mts";

config();

export default defineConfig({
  test: {
    ...vitestConfig.test,
    outputFile: "../../unittests-report.xml",
    coverage: {
      ...vitestConfig.test?.coverage,
      reportsDirectory: "../../coverage",
    },
  },
});
