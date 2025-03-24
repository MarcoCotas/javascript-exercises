const convertToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  let roundCelsius = Math.round(celsius * 10) / 10;
  return roundCelsius;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  let roundFahrnenheit = Math.round(fahrenheit * 10) / 10;
  return roundFahrnenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
