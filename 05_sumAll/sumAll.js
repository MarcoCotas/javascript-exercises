const sumAll = function (min, max) {
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    min < 0 ||
    max < 0 ||
    min % 1 !== 0 ||
    max % 1 !== 0
  ) {
    return "ERROR";
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
