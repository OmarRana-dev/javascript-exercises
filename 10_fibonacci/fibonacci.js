const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n === 0) return 0;

  let x = 1;
  let y = 0;

  for (let i = 2; i <= n; i++) {
    let result = x + y;
    y = x;
    x = result;
  }
  return x;
};

// Do not edit below this line
module.exports = fibonacci;
