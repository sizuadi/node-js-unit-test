test("test array", () => {
  const names = ["Sizu", "Nekozu", "Adi"];
  expect(names).toContain("Nekozu");
  expect(names).toEqual(["Sizu", "Nekozu", "Adi"]);

  const persons = [{ name: "Sizu" }, { name: "Nekozu" }];
  expect(persons).toContainEqual({ name: "Sizu" });
  expect(persons).toEqual([{ name: "Sizu" }, { name: "Nekozu" }]);
});
