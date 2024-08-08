let str = "Tushar";
let str2 = str.toLowerCase();
let mid = Math.floor(str2.length / 2);
console.log(mid);
let str3 = '';

for (let i = 0; i < str2.length; i++) {
    if (i >= mid) {
        str3 += str2.charAt(i).toUpperCase();
    } else {
        str3 += str2.charAt(i);
    }
}
console.log(str3);
