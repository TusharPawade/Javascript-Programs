let str = prompt("Enter an array :");
let arr = str.split(" ");
let n = prompt ("Enter operation :\n 1.Splice \n 2.Sclice \n 3.Push \n 4.Pop  ");
for(let i=0 ; i<arr.length ; i++){
    arr[i]=parseInt(arr[i]);
}
console.log(arr);

switch (n) {
    case "1": //Splice
        let index = Number(prompt("Enter index "));
        let remove = Number(prompt("How many elements you want to remove "));
        let elements = prompt("Enter new elements ");
        let addElements = elements.split(' ');
        for(let i=0 ; i<addElements.length ; i++){
            addElements[i]=parseInt(addElements[i]);
        }

        let cos = (arr, index, remove,addElements)=>{ 
            let arr2 = [];
            
            for(let i=0 ; i<index ; i++){
                    arr2.push(arr[i]);
            }
        
            for(let i=index ; i<index+1 ; i++){
                arr2.push(addElements);
            }
        
            for (let i=index+remove ; i<arr.length; i++){
                arr2.push(arr[i]);
            }
            console.log(arr2.flat());
            
        }
        cos(arr, index , remove , addElements);
        break;

    case "2": //Slice
        {let arr2 = [];
        let start = Number(prompt("Enter a start "));
        let end = Number(prompt("Enter the end"));
        for(let i=start ; i<end ; i++){
            arr2.push(arr[i]);   
        }
        console.log(arr2);}
        break;

    case "3": // Push
        let push = Number(prompt("Enter element to push:"));
        arr[arr.length] = push;
        console.log("Array after manual push:", arr);
        break;

    case "4": // Pop
        let arr2 = [];
        poppedElement = arr[arr.length-1];
        arr.length = arr.length-1;
        // for(let i=0 ; i<arr.length-1 ; i++){
        //     arr2.push(arr[i]);
        // }
        console.log("Popped element:", poppedElement);
        console.log("Array after pop:", arr);
        break;

    default:
        console.log("Enter a valid operation");
        break;
}

