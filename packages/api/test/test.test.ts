import { commonFunction } from "common/persistence";
import { describe, test } from "vitest";

describe("API tests", () => {
  test("API tests", async () => {
    const test = await commonFunction();

    console.log("Result in api test", test);
  });
});
