import { sleep } from "../utils/sleep";

export * from "./config";
export const commonFunction = async () => {
  const field = "someField";

  await sleep(50);

  console.log(field);

  return 42;
};
