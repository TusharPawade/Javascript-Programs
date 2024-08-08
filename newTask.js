let str ="(abcd(bd))"; 
let arr1 = [];
let arr3 = [];
let arr = str.split('');
//let a = arr.length-1
//console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i]!=')') {
        arr1.push(arr[i]);
    }else{
        while(arr1[arr1.length-1]!='(') {
            arr3.push(arr1.pop()); 
        }
        arr1.pop();
        arr1=arr1.concat(arr3);
        arr3=[];
          
    }
    //console.log(arr1);
}
  console.log(arr1.join(''));