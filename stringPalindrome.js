let str = prompt("Enter a string ");
let copy = str.toLowerCase();
let str2 = "";

let palindrome = () => {
    for (let i = copy.length - 1; i >= 0; i--) {
        str2 = str2.concat(copy[i]);
    }
    return str2;
}
palindrome();
if(copy == str2){
    console.log(`${str} is palindrome `);
}
else{
    console.log(`${str} is not palindrome `);
}