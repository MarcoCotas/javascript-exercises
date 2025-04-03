const convertToCelsius = function (fahrenheit) {
  conversionFToC = (fahrenheit - 32) * (5 / 9);
  let celsius = Math.round(conversionFToC * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function (celsius) {
  let conversionCToF = celsius * (9 / 5) + 32;
  let fahrenheit = Math.round(conversionCToF * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
