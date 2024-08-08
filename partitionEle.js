//Implement a function to partition an array into even and odd elements.
let arr = [12, 13, 24, 23, 14];
let partition = () =>{
    let arrEven = [];
    let arrOdd = [];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]%2==0){
            arrEven.push(arr[i]);
        }
        else{
            arrOdd.push(arr[i]);
        }
    }
    console.log(arrEven,arrOdd);
}
partition();