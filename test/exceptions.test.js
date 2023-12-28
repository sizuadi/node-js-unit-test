import { callMe, MyException } from "../src/exception";

test("test exceptions", () => {
  expect(() => callMe("Adi")).toThrow();
  expect(() => callMe("Adi")).toThrow(MyException);
  expect(() => callMe("Adi")).toThrow("ups my exceptions happens");
});
