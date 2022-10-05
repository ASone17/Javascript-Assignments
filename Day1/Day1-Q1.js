/*  1.	Write JS code to display all the prime numbers between 5 and 50. Log the output to the browser console.  */
function isPrime(n)
{
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
var start_number=prompt("Enter the starting number");5
var end_number=prompt("Enter the ending number");50
 for(var i=start_number;i<=end_number;i++){
    if(isPrime(i)){
        console.log(i);
    }
 }