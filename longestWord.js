let str = "gjgd chwvch cvwh kjbedvb";
arr2 = str.split(' ');
let arr = [];
let word =() =>{
    for (let i=0 ; i<arr2.length ; i++){
         arr.push(arr2[i].length);
        //console.log(arr);
    }
    let longest = arr[0];
    for (let i=0 ; i<arr.length ; i++){
        if(arr[i] > longest){
            longest = arr[i];
        }
    }
    return longest;
} 

console.log(word());