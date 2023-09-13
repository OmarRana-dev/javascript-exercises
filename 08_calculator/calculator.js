const add = function(value1, value2) {
  return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(value) {
  let result = 0;
  value.forEach((item) => {
    result += item;
  })
	return result;
};

const multiply = function(value) {
  let result = 1;
  value.forEach((item) => {
    result *= item;
  })
  return result;

};

const power = function(value, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= value;
  }
	return result;
};

const factorial = function(value) {
  let result = 1;
  let n = value;
  for (let i = 0; i < value; i++) {
    result *= n
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
