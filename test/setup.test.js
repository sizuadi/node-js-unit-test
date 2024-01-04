beforeAll(() => {
  console.info("Before All");
});

afterAll(() => {
  console.info("After All");
});

test("test", () => console.info("Rungkadd"));

beforeEach(() => {
  console.info("Before Each");
});

afterEach(() => {
  console.info("After Each");
});
