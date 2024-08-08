let str = prompt("Enter array");
let arr = str.split(' ');
let arr2 = [];
arr.sort();
let duplicates = () =>{
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i] != arr[i+1] ){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(duplicates());