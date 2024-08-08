let n = prompt("Enter a no. ");
let count = n.length;
let num = Number(n);
let temp = n;
let sum = 0;

console.log(count);

while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, count);
    temp = Math.floor(temp / 10); 
}

if (sum == num) {
    console.log("Armstrong no.");
} else {
    console.log("Not Armstrong no.");
}


// let n = prompt("Enter a no.");
// let sum = 0;
// let temp = n.split('');
// for (let i = 0; i< temp.length; i++) {
//     sum += Math.pow(temp[i], temp.length);
// }
// //temp.join();
// if (sum == n) {
//     console.log("Armstrong no.");
// }
// else{
//     console.log("Not Armstrong no.");
// }