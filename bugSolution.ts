function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number {
  if (typeof b === 'string') {
    const parsedB = parseFloat(b);
    if (isNaN(parsedB)) {
      throw new Error('Invalid input: b must be a number or a parsable string.');
    }
    return a + parsedB;
  } else {
    return a + b;
  }
}

let result1 = add(1, 2); // Correct: no error
let result2 = addSafe(1, "2"); // Correct: string is handled, parsed to number
let result3 = addSafe(1, "abc"); // Correct: throws an error because 'abc' cannot be parsed to a number
//let result4 = add(1, "2"); // Incorrect: Type 'string' is not assignable to type 'number'.