import { sum } from "../sum";


test("Some functio should calculate sum of two numbers", () => {
  const result = sum(3, 4);
  // assertion
  expect(result).toBe(7);
});
