// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let str = '';
    
//     // Add leading spaces
//     for (let j = 1; j <= rows - i; j++) {
//         str += ' ';
//     }
    
//     // Add stars
//     for (let k = 0; k <2*i-1 ; k++) {
//         str += ' * ';
//     }
    
//     console.log(str);
// }




// let n = 5;
// let pattern = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = n; j > i; j--) {
//     pattern += " ";
//   }
//   for (let j = 0; j<  i; j++) {
//     pattern += " * ";
//   }
//   pattern += "\n";
// }

// console.log(pattern);

let n = 5;
let pattern = " ";
for(let i=0 ; i<=n ; i++){
  for(let j=n ; j>i ; j--){
    pattern = pattern + " ";
  }
  for(let j=0 ; j<i ; j++){
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
