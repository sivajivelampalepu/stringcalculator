import { add } from "./StringValidations";


test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single number', () => {
  expect(add("1")).toBe(1);
});

test('returns sum for two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('handles newlines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws on negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
});

test('ignores numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
});
