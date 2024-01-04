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

export { sum, sumAll };
