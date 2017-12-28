# argrithym


 ### 1. Ugly number ###

  - Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
  Note that 1 is typically treated as an ugly number.
  In my javaScript program, there is a defect. The Time Limit Exceeded.  


  ### 2. Counts how many times digi k appearence? ### 

  Take number 2593, digi 5 as example. 

  - basic unit, 5 appears 259 times.
  - ten place， 5 appears 250 + 10 times.
  - hundred,  200 + 93 + 1 times.

  Sum up, 

   - the i digit from right, its number(0-9) is g, the left number of g is numLeft,  the basic count is a = numLeft * (i-1) power of 10
  - Revise, 
      - if g > k, count = a + (i-1) power of 10
      - if g < k, count = a;
      - if g = k,  take the right number of g as rightNum,  count =  a + rightNum + 1
  - when k = 0, the highest digit can not be 0, thus, basic count shoud be numLeft * (i-1) power of 10, subtract 1.


  ### 3. Sorted Binary Node Tree ###


 ### 4. Count how many 1 in binary ###
 
 把 一个 整数 减去 1， 再 和 原 整数 做 与 运算， 会把 该 整数 最 右边 一个 1 变成 0。 那么 一个 整数 的 二进制 表示 中有 多少 个 1， 就可以 进行 多少 次 这样 的 操作。

 ### 5. An integer, denote the number of trailing zeros in n! ### 

 Take 101 as example


 <img src="http://img.blog.csdn.net/20160416152912230" alt="图片" align=center />

  