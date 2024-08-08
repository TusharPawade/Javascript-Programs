//Find the longest subarray with alternating even and odd elements.
let arr = [[1,6,7,4,3,2,1],[1,2,3,4,5,8],[1,2,3,4,5,6,7,8,9,10]];

let longest = () => {
    let len = 0;
    maxIndexLen = 0;
    for(let i=0 ; i<arr.length ; i++){
        for(let j=0 ; j<arr[i].length ;j++){
            arr[i].length;
        }
        //console.log(arr[i].length);
        if (arr[i].length > len) {
            len = arr[i].length;
            maxIndexLen = arr[i];
        }
       
    }
    console.log(`maximum length = ${len}`);
    console.log(`maximum length Subarray = [${maxIndexLen}]`);
    
}

longest();