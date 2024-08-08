/*let arr =[1,2,3,4,5,6,7,8,9];
let addElements= [2,3,4,5]

let cos = (index, remove,addElements)=>{
    let arr2 = [];
    console.log(arr);
    for(let i=0 ; i<index ; i++){
            arr2.push(arr[i]);
    }
//console.log(arr2);

    for(let i=index ; i<index+1 ; i++){
        arr2.push(addElements);
    }
//console.log(arr2);

    for (let i=index+remove ; i<arr.length; i++){
        arr2.push(arr[i]);
    }
    console.log(arr2.flat());
    
}
cos(2,3,addElements);*/



let arr =[1,2,3,4,5,6,7,8,9];

let cos = (index, remove,...addElements)=>{     // ...addElements => (...)rest operator named addElements.
    let arr2 = [];
    console.log(arr);
    for(let i=0 ; i<index ; i++){
            arr2.push(arr[i]);
    }
//console.log(arr2);

    for(let i=index ; i<index+1 ; i++){
        arr2.push(addElements);
    }
//console.log(arr2);

    for (let i=index+remove ; i<arr.length; i++){
        arr2.push(arr[i]);
    }
    console.log(arr2.flat());
    
}

cos(2,3,12,23,34,45,56);