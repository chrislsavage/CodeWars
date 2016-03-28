/*
Given two integers, which can be positive and negative, find the sum of all the
numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!
*/


function GetSum( a,b )
{
   var max = Math.max( a , b);
   var min = Math.min( a, b );
   var arr = []; var i;

   for  (i = min; i <= max; i++) {
     arr.push(i)
   }
   return arr.reduce(function(a, b) { return a + b});
}
