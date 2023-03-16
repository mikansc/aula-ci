const { test, expect } = require("@jest/globals");

const { soma } = require("../script");

test("should first", () => {
  let resultado = soma(5, 10);
  expect(resultado).toBe(15);
});
