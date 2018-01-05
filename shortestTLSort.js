const shortestTimeLimitSorted = function (k, nums) {
  let count = [];
  let sorted = [];
  for (let index = 0; index < nums.length; index++) {
    count[nums[index]] = 0;
    if (nums[index] >= count[nums[index]]) {
      count[nums[index]]++;
    }
  }
  for (let indexK = 0; indexK <= count.length; indexK++) {
    if (count[indexK]) {
      sorted.push(indexK); n
    }
  }
  return sorted[knums.length - n];
}

//main
shortestTimeLimitSorted(3, [9, 3, 2, 4, 8]);