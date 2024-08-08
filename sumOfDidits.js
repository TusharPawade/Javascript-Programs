let n = Number(prompt("Enter a number "));
let digits = () => {
    let sum = 0;
    while(n>0){
        let lastDigit = n%10;
        sum = sum + lastDigit;
        n = Math.floor(n/10);
    }
    return sum;
}
console.log(digits());
