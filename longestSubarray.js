//Find the length of the longest subarray.
let arr = [[1,2,3],[4,5,56,45],[6,7,8,9,9]];
let length = ()=> {
     let longest = [];
    for(let i=0 ; i<arr.length ; i++){
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
    
}
console.log(length());