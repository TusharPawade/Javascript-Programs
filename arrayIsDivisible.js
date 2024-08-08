let arr = [10, 12, 5, 7, 18, 22, 27, 23];
let arr2 =[];

for(let i=0 ; i<arr.length ;  i++){
    if(arr[i]%2==0){
     arr2.push(arr[i]); 
    
    }
    else{
        arr2.push(-1);
    } 
}
console.log(arr2);
