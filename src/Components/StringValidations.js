export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers?.split("\n")[0];
    const customDelimiter = delimiterLine.substring(2);
    delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    numbers = numbers.split("\n")[1];
  }

  const nums = numbers?.split(delimiter).map(Number);
  
  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return nums?.filter(n => n <= 1000).reduce((acc, val) => acc + val, 0);
}
