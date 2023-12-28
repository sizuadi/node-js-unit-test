test("string.not", () => {
  const name = "M Adi Siswanto";

  expect(name).not.toBe("Vimlek");
  expect(name).not.toEqual("Vimlek");
  expect(name).not.toMatch(/Vimlek/);
});

test("number.not", () => {
  const value = 2 + 1;

  expect(value).not.toBeGreaterThan(5);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(69);
});
