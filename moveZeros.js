// let arr = [3,5,0,0,6,0,3,0,8];


// let zeros = ()=> { 
//     arr.sort();
//     arr.reverse();
//     console.log(arr);
// }
// zeros();

let arr = [3,5,0,0,6,0,3,0,8];


let zeros = ()=> {
    let arr2 = [];
    let arr3 =[];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]==0){
            arr2.push(arr[i]);
        }
        else{
            arr3.push(arr[i]);
        }
    }
    console.log(arr3.concat(arr2));
    
}
zeros();