import { describe, test } from "vitest";
import { commonFunction } from "..";

describe("common tests", () => {
  test("common test", async () => {
    const test = await commonFunction();

    console.log("Result in common test", test);
  });
});
