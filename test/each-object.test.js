import { sumAll } from "../src/sum";

const table = [
  { numbers: [], expected: 0 },
  { numbers: [10], expected: 10 },
  { numbers: [20, 10, 20], expected: 50 },
  { numbers: [10, 10, 20], expected: 40 },
];

test.each(table)(
  "test sumAll($numbers), should result $expected",
  ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
  }
);
