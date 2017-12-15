const nthUglyNumber = function (n) {
  var array = [];
  function sortNumber(a, b) {
    return a - b
  }

  if (n < 9) {
    array = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12];
    return array[n - 1];
  } else {
    for (var i = 0; i < n / 3; i++) {
      for (var j = 0; j < n / 3; j++) {
        for (var k = 0; k < n / 3; k++) {
          array.push(Math.pow(2, k) * Math.pow(3, j) * Math.pow(5, i));
        }
      }
    }
    array.sort(sortNumber);
    return array[n - 2];
  }
}
nthUglyNumber(599);