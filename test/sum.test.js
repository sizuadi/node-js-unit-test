import { sum, sumAll } from "../src/sum";

test("1 + 2 should be 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test("should get 50 with parameter [10,10,10,10,10]", () => {
  const result = sumAll([10, 10, 10, 10, 10]);
  expect(result).toBe(50);
});
