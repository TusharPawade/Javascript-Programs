let n =Number(prompt("Enter a number "));
let fact = 1;
let factorial = () => {
    for(let i=1 ; i<=n ; i++){
        fact = fact*i;
    }
    return fact;
}
console.log(factorial());