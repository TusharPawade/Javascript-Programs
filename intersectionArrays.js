// let str = '';
// str2 ='';
// let arr = [23,24,25,26];
// let arr2 = [25,26];
// let arr3 = [];
// let intersection = ()=>{
//     for(let i=0 ; i<arr.length ; i++){
//         for(let j=0 ; j<arr2.length ; j++){
//             if (arr[i] = arr[2] )
//         }
//     }
// }


let arr = [23, 24, 25, 26];
let arr2 = [25, 26];
let arr3 = [];

let intersection = () => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {  
                arr3.push(arr[i]);  
            }
        }
    }
}

intersection();
console.log(arr3);  