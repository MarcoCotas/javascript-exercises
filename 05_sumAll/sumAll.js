const sumAll = function (start, end) {
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }

  if (start > end) [start, end] = [end, start];

  let sumAll = 0;
  for (let i = start; i <= end; i++) {
    sumAll += i;
  }
  return sumAll;
};

// Do not edit belfasfasow this line
module.exports = sumAll;
