// Check whether a Number is a prime or not.
// Write a program which takes  a number from user and check whether number is prime number or not a prime number
const Prime_Check = (N) => {
    for (let i=2; i<N; i++) 
         if (N % i !== 0) {
           return "YES";
         } 
         else {
           return "NO";
         }
       
   
        
       
   };