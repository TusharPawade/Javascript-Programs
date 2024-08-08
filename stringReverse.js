let str = prompt("Enter a string");
let str2 = "";
let reverse = () =>{
for(let i= str.length-1; i>=0 ; i--){
    str2 = str2.concat(str[i]);
}
return str2;
}
console.log(reverse());