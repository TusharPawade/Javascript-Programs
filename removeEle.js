//implement a function to remove a given element from an array.

let str = prompt("Enter an array ");
let arr = str.split(" ");
console.log(arr);
let remove = ()=>{
    arr2 = [];
    let n = Number(prompt("Enter a element"));
    for(let i=0 ; i<arr.length ; i++){
        if (arr[i]!=n){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
console.log(remove());