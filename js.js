//Factorialize a Number
//Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

//create a function
//if condition to test of n ==0 
//else condition to see if n>0
//for loop tp crear a range of numbers between 2 and inserted number
//return the result
//creat a new variable to test the fun
//call the function

function Factorialize(n){
    if(n=== 0){
        return 1;
    } else{
        let FactOfn = 1;
        for (let i = 2; i <= n; i++) {
            FactOfn *= i;  
        }
        return FactOfn;
    }  
}

const n= 5;
let FactorTest= Factorialize(n);
console.log(`the ${n}! is ${FactorTest}`)


  
  
  