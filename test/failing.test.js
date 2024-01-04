import { sayHello } from "../src/sayHello";

test("sayHello", () => {
  expect(sayHello("Adi")).toBe("Hello Adi");
});

test.failing("sayHello error", () => {
  sayHello(null);
});

test("sayHello error matchers", () => {
  expect(() => sayHello(null)).toThrow();
});
