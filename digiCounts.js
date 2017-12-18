function digiCounts(k, n) {
  var count = 0,
    x = 0;
  if (k === 0 && n === 0) {
    for (var i = 1; x = n / i; i *= 10) {
      var high = highNumber(x);
      if (k === 0) {
        if (high) {
          high--;
        } else {
          count++;
          break;
        }
      }
      count += high * i;
      var current = x % 10;
      if (current > k) {
        count += i;
      } else if (current === k) {
        count += n - x * i + 1;
      }
    }
    return count;
  }
}

function highNumber(x) {
  var high = x / 10;
  return high;
}
