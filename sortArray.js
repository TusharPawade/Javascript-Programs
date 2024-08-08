let str = prompt("Enter an array elements giving space ");
arr = str.split(' ');
let sort = () => {
    for (let i = 0; i < arr.length; i++) {
        arr.sort();    
    }
    return arr;
}
console.log(sort());