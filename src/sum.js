const sum = (first, second) => {
  return first + second;
};

const sumAll = (arrayNumber) => {
  let number = 0;
  for (const key in arrayNumber) {
    number += arrayNumber[key];
  }
  return number;
};

export const calculate = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }

  callback(total);
};

export const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }

  return callback(total);
};
export { sum, sumAll };
