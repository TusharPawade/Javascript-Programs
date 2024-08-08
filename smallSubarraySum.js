//Write a function to find the smallest subarray with a sum greater than a given value.

/*let arr = [3,4,5,2,8,7];
let n = 11;
let smallestSubarray = () => {
    sum = 0;
    let arr2 = [];
    for(let i=0 ; i<arr.length ; i++){
        for(let j=1 ; j<arr.length ;j++){
            sum = arr[i] + arr[j];
            if(sum == n){
                arr2.push(arr[i]);
            }
        }

    }
    console.log(arr2);
}
smallestSubarray();*/

let arr = [[1,2,3,4,],[4,8,1,7,6],[1,8,2]];
let n = 50;

let smallestSubarray = () => {
    let sum = 0;
    let arr2 = [];
    for(let i=0 ; i<arr.length ; i++){
        for(let j=0 ; j<arr[i].length ;j++){
            sum = sum + arr[i][j];
        }
        arr2.push(sum);
        //console.log(sum);  
    }
    console.log(arr2);
    for(let k=0 ; k<arr2.length ; k++){
        if (n<=arr2[k]) {
            console.log(arr2[k]);
            break;
        }
    }
    
}
smallestSubarray();