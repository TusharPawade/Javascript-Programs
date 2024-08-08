let arr = [15,30,7,9,5,3,1,0];
arr2 = arr.sort((a,b)=>a-b);
let secondLargest = () => {
    return (arr2[arr2.length-1]);
    }
console.log(secondLargest());