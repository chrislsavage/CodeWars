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
