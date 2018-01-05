/**
 * @param n: An integer
 * @param nums: An array
 * @return: the Kth largest element
 */
const kthLargestElement = function (n, nums) {
  const quickSort = function (left, right) {
    let i, j, t, temp;

    if (left > right) {
      return;
    }

    temp = nums[left];
    i = left;
    j = right;
    while (i !== j) {
      // start from the rightest side
      while (nums[j] >= temp && i < j) {
        j--;
      }
      while (nums[i] <= temp && i < j) {
        i--;
      }
      // when find nums[right] < temp and nums[left] > left
      if (i < j) {
        t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
      }
    }
    // put base value to correct position
    nums[left] = nums[i];
    nums[i] = temp;

    quickSort(left, i - 1);
    quickSort(i + 1, right);
  };
  quickSort(1, nums.length);
  console.log(nums);
  return nums[n - 1];
}

//main
kthLargestElement(10, [1, 2, 3, 4, 5, 6, 8, 9, 10, 7]);

