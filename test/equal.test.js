test("test toBe", () => {
  const name = "Adi";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Adi");
});

test("test toEqual", () => {
  let person = { id: "adi" };

  Object.assign(person, { name: "Adi" });

  expect(person).toEqual({ id: "adi", name: "Adi" });
});
