import { sayHelloAsync } from "../src/async";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Adi")).resolves.toBe("Hello Adi");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Adi")).resolves.toBe("Hello Adi");
});
test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Adi")).resolves.toBe("Hello Adi");
});
