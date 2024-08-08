let arr = [1, 2, 3, 4, 5];
console.log(arr);
let a = prompt(
  "Choose an operation : \n1.length \n 2.join \n 3.push \n 4.pop \n 5.shift \n 6.unshift \n 7.splice");
console.log(a);
switch (a) {
  case "1":
    console.log(arr);
    arr.length;
    console.log(arr);
    break;

  case "2":
    console.log(arr);
    let str = arr.join('');
    console.log(str);
    break;

  case "3":
    console.log(arr);
    let x = Number(prompt("Enter element you want to push"));
    arr.push(x);
    console.log(arr);
    break

  case "4":
    console.log(arr);
    arr.pop();
    console.log(arr);
    break;

  case "5":
    console.log(arr);
    arr.shift();
    console.log(arr);
    break;

  case "6":
    console.log(arr);
    let y = Number(prompt("Enter element you want to push"));
    arr.unshift(y);
    console.log(arr);
    break;

  case "7":
    console.log(arr);
    let p = Number(prompt("Enter Index : "));
    let q = Number(prompt("Enter the number of element which should be deleted : "));
    let z = prompt("Do you want to add element yes/no ");
    let r = 0;
    if (z == "yes") {
         r = Number(prompt("Enter the element you want add to deleted position "));
         arr.splice(p, q, r)
         console.log(arr);
        } else {
            console.log("Just delete and print the array");
            arr.splice(p,q);
            console.log(arr);
        }

    
    break;

  default:
    console.log("Enter a valid operation");
    break;
}
