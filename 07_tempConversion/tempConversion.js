const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) / 1.8;
  let finel = parseFloat(result.toFixed(1));
  return finel;
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * 1.8) + 32;
  let finel = parseFloat(result.toFixed(1));
  return finel;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
