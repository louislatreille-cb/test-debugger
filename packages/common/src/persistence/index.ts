import { sleep } from "../utils/sleep";

export * from "./configuration";
export const commonFunction = async () => {
  const field = "someField";

  await sleep(50);

  console.log(field);

  return 42;
};
