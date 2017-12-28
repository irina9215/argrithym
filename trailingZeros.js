/**
 * @param n: A  integer
 * @return: An integer, denote the number of trailing zeros in n!
 */
function trailingZeros(n) {
  let count = 0;
  let temp = parseInt(n / 5);
  while (temp / 5 !== 0) {
    count += temp;
    temp = parseInt(temp / 5);
  }
  return count;
}