const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sumArray = array.reduce(
    (acumulator, currentValue) => acumulator + currentValue,
    0
  );
  return sumArray;
};

const multiply = function (numbers) {
  return numbers.reduce((acu, num) => acu * num, 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  if (num1 === 0 || num1 === 1) {
    return 1;
  }
  let factorialNum = 1;
  for (let i = 2; i <= num1; i++) {
    factorialNum *= i;
  }

  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
