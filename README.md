# argrithym


 ### Ugly number ###

  - Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
  Note that 1 is typically treated as an ugly number.
  In my javaScript program, there is a defect. The Time Limit Exceeded.  


  ### counts how many times digi k appearence? ### 

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
  

  ### Sorted Binary Node Tree ###
