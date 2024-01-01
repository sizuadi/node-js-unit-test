import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Vimlek");
  expect(result).toBe("Hello Vimlek");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Vimlek")).resolves.toBe("Hello Vimlek");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
