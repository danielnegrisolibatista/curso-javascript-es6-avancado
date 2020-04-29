class Math {
  sum = function sum(a, b) {
    return a + b;
  }

  multiply = function multiply(a, b) {
    return a * b;
  }

  printSum(req, res, a, b) {
    res.load('index', a + b);
  }
}

module.exports = Math;