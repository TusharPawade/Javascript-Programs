let str = "yash";
//let arr = str.split('');
let pos =Math.floor(str.length-1)/2;
let str3 = str.slice(0,pos); 
let str4 = str.slice(pos+1,str.length); 
let str2 = str.charAt(pos).toUpperCase();

console.log(str3+str2+str4);