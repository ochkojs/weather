
let isPalindrome = function(x){
    z=x;
    numLength = String(x).length;
    let y = '';
    let sumY = '';
    for(let i = 1; i <= numLength; i++){
        y = String(Math.floor(x % 10));
        x = Math.floor(x / 10);
        sumY = sumY + y;
    }
   if(String(z) == sumY){
    return true;
   } else {
    return false;
   }
}
console.log(isPalindrome(181981));
