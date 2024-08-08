let str = "subhashhellojikmlloo";
let b = str.split("");
let c = b.reverse();
for (let i = 0; i < c.length ; i++) {
  if (c[i] == c[i + 1]) {
    c.splice(i, 2);
    // c[i]=c[i-1];
    // c[i+1]=c[i-1];
  }
}
let d = c.join("");
let e = d.split("");
let f = e.reverse();
let g = f.join("");
console.log(g);


// for revese a string
// let str = "subhashhelloji";
// let b = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     // b += str[i];
//     b = b + str [i];
// }
// console.log(b);


// let n = Number(prompt("Enter arr size"));
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("Enter arr element"));
// }
// let arr2 = arr.sort();
// console.log(arr2.reverse());

