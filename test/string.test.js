test("test string", () => {
  const name = "Adi Siswanto";

  expect(name).toBe("Adi Siswanto");
  expect(name).toEqual("Adi Siswanto");
  expect(name).toMatch(/want/);
});
