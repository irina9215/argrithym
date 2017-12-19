function digitOneCounts(n) {
  var counts = 0
  while (n) {
    ++counts;
    n = n & (n - 1);
  }
  return counts;
}