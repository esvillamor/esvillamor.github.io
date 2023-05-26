function basicmath(word) {
    // Convert the word to lowercase for case-insensitive comparison
    word = word.toLowerCase();
  
    // Split the word into individual parts
    const parts = word.split(' ');
  
    // Extract the operands and operator from the parts
    const operand1 = parseInt(parts[0]);
    const operator = parts[1];
    const operand2 = parseInt(parts[2]);
  
    // Perform the corresponding operation based on the operator
    let result;
    if (operator === 'plus') {
      result = operand1 + operand2;
    } else if (operator === 'minus') {
      result = operand1 - operand2;
    } else if (operator === 'multiply' || operator === 'times') {
      result = operand1 * operand2;
    } else if (operator === 'divide') {
      result = operand1 / operand2;
    } else {
      return 'Invalid operator';
    }
  
    return result;
  }

const problem = '5 plus 3';
const solution = basicmath(problem);
console.log(problem + " = " + solution);  // Output: 8

const problem2 = '5 minus 3';
const solution2 = basicmath(problem2);
console.log(problem2 + " = " + solution2);  // Output: 2

const problem3 = '5 multiply 3';
const solution3 = basicmath(problem3);
console.log(problem3 + " = " + solution3);  // Output: 15

const problem4 = '15 divide 3';
const solution4 = basicmath(problem4);
console.log(problem4 + " = " + solution4);  // Output: 5